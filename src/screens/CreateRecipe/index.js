import React, { useEffect, useContext, useState } from "react";
import styles from "./Style";
import { ImageBackground, Text, View, Image, SafeAreaView, KeyboardAvoidingView, Platform, Alert, } from "react-native";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import { ScrollView, TouchableOpacity, TextInput } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';
import { AppContext } from "../../context/context";
import { API_BASE_URL } from "../../api/api";


const CreateRecipe = ({ navigation }) => {
    const { token, user } = useContext(AppContext);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [recipeId, setRecipeId] = useState('');



    const handleImageUpload = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                const selectedAsset = result.assets[0];
                setImage({ uri: selectedAsset.uri });
                // setImage(result);
            }
        } catch (error) {
            console.error('Error selecting image:', error);
        }
    };

    const uploadImage = async (recipeId) => {
        try {
            const imageFormData = new FormData();
            if (image && recipeId) {
                imageFormData.append('image', {
                    uri: image.uri,
                    type: 'image/jpeg',
                    name: 'recipe_image.jpg',
                });


                imageFormData.append('recipe_id', recipeId);

                const response = await axios.post(`${API_BASE_URL}/api/upload_recipe_image`, imageFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.msg) {
                    // console.log('Image uploaded successfully:', response.data.msg);
                } else {
                    // console.error('Failed to upload image:', response.data.error);
                }
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };




    const createRecipe = async () => {
        try {

            if (!title.trim() || !ingredients.trim() || !instructions.trim()) {
                Alert.alert('Error', 'Please fill in all required fields.');
                return;
            }
            // Convert ingredients to an array of objects
            const ingredientsArray = ingredients.split(',').map(item => ({ name: item.trim() }));

            const recipeData = {
                title: title || '',
                ingredients: ingredientsArray || [],
                instructions: instructions || '',
            };


            const response = await axios.post(`${API_BASE_URL}/api/create_recipe`, recipeData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.msg) {
                Alert.alert('Success', response.data.msg);
                const createdRecipeId = response.data.recipe_id;
            
                setRecipeId(createdRecipeId);

                await uploadImage(createdRecipeId);

                setImage(null);
                setTitle('');
                setIngredients('');
                setInstructions('');

                navigation.goBack();
            } else {
                Alert.alert('Error', 'Failed to create recipe. Please try again.');
            }

        } catch (error) {
            console.error('Error creating recipe:', error);
            Alert.alert('Error', 'An unexpected error occurred. Please try again.');
        }
    };




    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ display: "flex", flexDirection: "row", marginTop: 50, columnGap: 40, marginLeft: -12 }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../../../assets/back.png')}
                                style={{ height: 30, width: 30, marginLeft: 30 }} />
                        </TouchableOpacity>
                    </View>
                    <Title text="Add Your Recipe" />
                </View>



                <View style={{ marginTop: 30 }}>
                    <Buttons onPress={handleImageUpload}>Upload Recipe Picture</Buttons>
                </View>


                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                ></KeyboardAvoidingView>
                <View style={styles.container}>

                    <View style={styles.TitleContainer}>
                        <TextInput
                            placeholder="Title"
                            placeholderTextColor={colors.darkgrey}
                            style={styles.input}
                            multiline={true}
                            numberOfLines={2}
                            value={title}
                            onChangeText={setTitle}

                        />
                    </View>


                    <View style={styles.IngridentsContainer}>
                        <TextInput
                            placeholder="Add Ingredients seperated by comma"
                            placeholderTextColor={colors.darkgrey}
                            style={styles.input}
                            multiline={true}
                            numberOfLines={2}
                            value={ingredients}
                            onChangeText={setIngredients}



                        />
                    </View>

                    <View style={styles.InstructionContainer}>
                        <TextInput
                            placeholder="Add Instructions and end each with fullstop."
                            placeholderTextColor={colors.darkgrey}
                            style={[styles.input,]}
                            multiline={true}
                            numberOfLines={8}
                            value={instructions}
                            onChangeText={setInstructions}
                        />

                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Buttons onPress={createRecipe}>Create</Buttons>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>

    )
}

export default React.memo(CreateRecipe);
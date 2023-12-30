import React, { useState, useEffect, useContext } from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, TouchableOpacity, ActivityIndicator, Alert, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Title from "../../components/Title";
import Card from "../../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { API_BASE_URL } from "../../api/api";
import { AppContext } from "../../context/context";
import Icon from 'react-native-vector-icons/Ionicons';



const UserRecipeDetail = ({ navigation, route }) => {
    const { token, user, savedRecipes, updateSavedRecipes } = useContext(AppContext);
    const { recipeId } = route.params;
    const [singleRecipe, setSingleRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(savedRecipes.includes(recipeId));


    useEffect(() => {

        getSingleRecipes(recipeId)
        checkSavedState()
    }, [recipeId])


    const getSingleRecipes = (id) => {

        axios.get(`${API_BASE_URL}/api/get_recipe_by_id/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setSingleRecipe(response.data);
                setIsLoading(false)
            })
            .catch(error => {
                console.error('Error fetching Single UserRecipe:', error);
                setIsLoading(false)
            });

    }

    const checkSavedState = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/check_favorite/${recipeId}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
    
          setIsSaved(response.data.isFavorite);
        } catch (error) {
          console.log('Error checking saved state:', error);
        }
      };

    useEffect(() => {
        const loadSavedState = async () => {
            try {
                const savedState = await AsyncStorage.getItem('isSavedRecipe_' + recipeId);
                setIsSaved(savedState === 'true');
            } catch (error) {
                console.error('Error loading saved state:', error);
            }
        };

        loadSavedState();
    }, [recipeId]);

    const onSaveToggle = async () => {
        try {
            // Toggle save state locally
            const newSavedRecipes = isSaved
                ? savedRecipes.filter((savedId) => savedId !== recipeId)
                : [...savedRecipes, recipeId];
            updateSavedRecipes(newSavedRecipes);
            setIsSaved((prevIsSaved) => !prevIsSaved);

            // Save the state in AsyncStorage
            await AsyncStorage.setItem('isSavedRecipe_' + recipeId, isSaved.toString());

            if (!isSaved) {
                // Add recipe to favorites
                response = await axios.post(
                    `${API_BASE_URL}/api/addtofavourite/${recipeId}`,
                    null,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status === 201) {
                    // Update the save state only when the addition is successful
                    setIsSaved(true);
                    Alert.alert("Success", "Recipe added to favorites.");

                } else {
                    Alert.alert("Error", response.data.detail || "Something went wrong. Please try again.");
                }
            } else {
                // Remove recipe from favorites
                response = await axios.delete(
                    `${API_BASE_URL}/api/remove_from_favourite/${recipeId}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status === 200) {
                    // Update the save state only when the deletion is successful
                    setIsSaved(false);
                    Alert.alert("Success", "Recipe removed from favorites.");
                  
                } else {
                    Alert.alert("Error", response.data.detail || "Something went wrong. Please try again.");
                }
            }

            setIsLoading(false);
        } catch (error) {
            Alert.alert("Error", "An unexpected error occurred. Please try again.");
            setIsLoading(false);
        }
    };


    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#B1AEAE" />
            </View>
        );
    }

    return (
        <SafeAreaView>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 64, columnGap: 50 }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../assets/back.png')}
                            style={{ height: 30, width: 30, marginLeft: 30 }} />
                    </TouchableOpacity>
                </View>
                <Title text="User Recipe Detail" />
            </View>

            <ScrollView style={{ marginBottom: 93 }}>
                <View>
                    <Image style={styles.image} source={{ uri: `${API_BASE_URL}/${singleRecipe.featured_image}` }} />
                    {/* <ImageBackground style={styles.image} source={{ uri: `https://7e2a-182-191-159-168.ngrok-free.app/${singleRecipe.featured_image}`}}> */}
                    <TouchableOpacity style={styles.saveIcon} onPress={onSaveToggle} >
                        {isSaved ? (
                            <Icon name="heart" size={35} color="green" />
                        ) : (
                            <Icon name="heart" size={35} color="#B1AEAE" />
                        )}
                    </TouchableOpacity>
                    {/* </ImageBackground> */}
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{singleRecipe.title}</Text>
                </View>

                <Text style={styles.HeadingTitle}>Ingridents</Text>
                {singleRecipe.ingredients.map((ingredient) => (
                    <View key={ingredient.id} style={styles.row}>
                        <Text style={styles.value}>{ingredient.name}</Text>
                    </View>
                ))}

                <Text style={styles.HeadingTitle}>Instructions</Text>
                {singleRecipe.instructions.split('.').map((step, index) => (
                    <View key={index} style={styles.instructionRow}>
                        <Text style={styles.index}>{`Step ${index + 1}`}</Text>
                        <Text style={styles.instructionText}>{step}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>

    )
}

export default React.memo(UserRecipeDetail);
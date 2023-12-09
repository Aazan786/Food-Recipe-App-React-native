import React, { useEffect } from "react";
import styles from "./Style";
import { ImageBackground, Text, View, Image, SafeAreaView, KeyboardAvoidingView, Platform, } from "react-native";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import { ScrollView, TouchableOpacity, TextInput } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';




const CreateRecipe = ({ navigation }) => {

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
                    <Buttons onPress={() => navigation.navigate('Signin')}>Upload Recipe Picture</Buttons>
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

                        />
                    </View>


                    <View style={styles.IngridentsContainer}>
                        <TextInput
                            placeholder="Ingredients"
                            placeholderTextColor={colors.darkgrey}
                            style={styles.input}
                            multiline={true}
                            numberOfLines={2}


                        />
                    </View>

                    <View style={styles.InstructionContainer}>
                        <TextInput
                            placeholder="Instructions"
                            placeholderTextColor={colors.darkgrey}
                            style={[styles.input,]}
                            multiline={true}
                            numberOfLines={8}
                        />

                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Buttons onPress={() => navigation.navigate('Signin')}>Submit</Buttons>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>

    )
}

export default React.memo(CreateRecipe);
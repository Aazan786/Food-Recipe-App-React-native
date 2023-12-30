import React, { useState, useEffect } from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import Title from "../../components/Title";
import Card from "../../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";


const RecipeDetail = ({ navigation, route }) => {

    const { recipeId } = route.params;
    const [singleRecipe, setSingleRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        getSingleRecipes(recipeId)
    }, [recipeId])


    const getSingleRecipes = (id) => {

        axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                setSingleRecipe(response.data.meals[0]);
                setIsLoading(false)
            })
            .catch(error => {
                console.error('Error fetching singleRecipes data from mealdbserver:', error);
                setIsLoading(false)
            });

    }

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#B1AEAE" />
            </View>
        );
    }

    const renderIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;

            if (singleRecipe[ingredientKey]) {
                const ingredientText = `${singleRecipe[ingredientKey]} - ${singleRecipe[measureKey] || 'N/A'}`;
                ingredients.push(
                    <View key={ingredientKey} style={styles.row}>
                        <Text style={styles.value}>{ingredientText}</Text>
                    </View>
                );
            }
        }
        return ingredients;
    };

    const renderInstructions = () => {
        const instructions = singleRecipe.strInstructions.split(/\r\n\r\n|\r\n/)
        .filter(step => step.trim() !== '');;

        return instructions.map((step, index) => (
            <View key={index} style={styles.instructionRow}>
                <Text style={styles.index}>{`Step ${index + 1}`}</Text>
                <Text style={styles.instructionText}>{step}</Text>
            </View>
        ));
    };


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
                <Title text="Recipe Detail" />
            </View>

            <ScrollView style={{ marginBottom: 93 }}>
                <View>
                    <Image style={styles.image} source={{ uri: singleRecipe.strMealThumb }} />
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{singleRecipe.strMeal}</Text>
                </View>

                <Text style={styles.HeadingTitle}>Ingridents</Text>
                {renderIngredients()}

                <Text style={styles.HeadingTitle}>Instructions</Text>
                {renderInstructions()}
            </ScrollView>
        </SafeAreaView>

    )
}

export default React.memo(RecipeDetail);
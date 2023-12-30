import React, { useEffect, useState, useContext } from 'react';
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, FlatList, RefreshControl, ActivityIndicator } from "react-native";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import FavCard from "../../components/Fav Card";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { AppContext } from "../../context/context";
import { API_BASE_URL } from "../../api/api";


const Favourite = ({ navigation }) => {
    const { token, user } = useContext(AppContext);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchFavouritesRecipes()
    }, []);

    const handleRefresh = () => {
        setRefreshing(true);
        fetchFavouritesRecipes()
        setRefreshing(false);
    };

    const fetchFavouritesRecipes = () => {
        axios.get(`${API_BASE_URL}/api/get_favorite_recipes`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then((Response) => {
                setFavorites(Response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching favourite recipes:', error);
                setIsLoading(false);
            });
    }



    return (
        <SafeAreaView>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            >
                <View style={{ display: "flex", flexDirection: "row", marginTop: 50, columnGap: 40, marginLeft: 95 }}>
                    <Title
                        style={{}}
                        text="Favourite recipes"
                    />
                </View>

                {isLoading && <ActivityIndicator size="large" color="#B1AEAE"/>}

                {favorites.length === 0 && !isLoading && (
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>No favorite recipes found.</Text>
                )}
            </ScrollView>
            
            <View style={{ marginBottom: 240 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <FavCard
                            style={{ marginLeft: 24 }}
                            RecipeTitle={item.recipe.title}
                            image={item.recipe.featured_image}
                            onPress={() => navigation.navigate('UserRecipeDetail', { recipeId: item.recipe.id })}
                        />
                    )}
                    numColumns={2}
                />

            </View>

        </SafeAreaView>

    )
}

export default React.memo(Favourite);
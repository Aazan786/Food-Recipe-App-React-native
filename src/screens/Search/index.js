import React, { useState, useContext, useEffect } from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, FlatList } from "react-native";
import colors from "../../constants/colors";
import SearchInput from "../../components/SearchInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import Title from "../../components/Title";
import Card from "../../components/Card";
import axios from "axios";



const Search = ({ navigation }) => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {

        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`)
            .then((response) => {
                // console.log(response);
                setSearchResults(response.data.meals || []);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    };

    return (
        <SafeAreaView>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 64, columnGap: 40 }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../assets/back.png')}
                            style={{ height: 30, width: 30, marginLeft: 30 }} />
                    </TouchableOpacity>
                </View>

                <Title text="Search Recipes" />

            </View>
            <SearchInput
                placeholder="Search Recipe"
                showSearchIcon
                onSearchChange={handleSearch}

            />

            <View style={{ marginBottom: 380 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={searchResults}
                    keyExtractor={(item) => item.idMeal}
                    renderItem={({ item }) => (
                        <Card
                            style={{ marginLeft: 24 }}
                            RecipeTitle={item.strMeal}
                            RecipeImage={item.strMealThumb}
                            onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.idMeal })}
                        />
                    )}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>

    )
}

export default React.memo(Search);
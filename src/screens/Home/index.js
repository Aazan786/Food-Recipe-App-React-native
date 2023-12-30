import React, { useState, useContext, useEffect } from "react";
import styles from "./style";
import { Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView, RefreshControl,ActivityIndicator } from "react-native";
import colors from "../../constants/colors";
import SearchInput from "../../components/SearchInput";
import RecipeCard from "../../components/Recipe Card";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import Title from "../../components/Title";
import { AppContext } from "../../context/context";
import { API_BASE_URL } from "../../api/api";
import axios from "axios";




const Home = ({ navigation }) => {
    const { token, user } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setcategories] = useState([])
    const [activeCategory, setActiveCategory] = useState('Beef');
    const [recipes, setrecipes] = useState([])
    const [userrecipes, setuserrecipes] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [loadingCategory, setLoadingCategory] = useState(false);



    useEffect(() => {
        getCategories();
        getRecipes();
    }, [])

    const handleCategoryPress = category => {
        setLoadingCategory(true);
        getRecipes(category)
        setActiveCategory(category);
        setrecipes([])
    };

    const getCategories = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')

            .then(response => {
                setcategories(response.data.categories);
                setIsLoading(false)


            })
            .catch(error => {
                console.error('Error fetching catagories from mealdbserver:', error);
                setIsLoading(false)
            });

    }

    const getRecipes = (category = "Beef") => {

        axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(response => {
                setrecipes(response.data.meals);
                setLoadingCategory(false); 
            })
            .catch(error => {
                console.error('Error fetching recipes from mealdbserver:', error);
                setLoadingCategory(false);
            });

    }


    useEffect(() => {
        fetchuserrecipes();
    }, [])

    const handleRefresh = () => {
        setRefreshing(true);
        fetchuserrecipes()
        setRefreshing(false);
    };

    const fetchuserrecipes = () => {
        axios.get(`${API_BASE_URL}/api/get_all_recipes`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setuserrecipes(response.data);
                setIsLoading(false)


            })
            .catch(error => {
                console.error('Error fetching user recipes:', error);
                setIsLoading(false)
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

                <View style={{ display: "flex", flexDirection: "row", marginTop: 64, columnGap: 110 }}>
                    <View>
                        <Text style={styles.username}>Hello {user.name}!</Text>
                        <Text style={styles.tagline}>What are you cooking today?</Text>
                    </View>
                    <View>
                        {user.profile_image ? (
                            <Image
                                source={{ uri: `${API_BASE_URL}/${user.profile_image}` }}
                                style={{ backgroundColor: colors.orange, height: 50, width: 50, borderRadius: 25 }}
                            />
                        ) : (
                            <Image
                                source={require('../../../assets/avatar.png')}
                                style={{ backgroundColor: colors.orange, height: 50, width: 50, borderRadius: 25 }}
                            />
                        )}
                    </View>
                </View>

                <SearchInput pressable onPress={() => navigation.navigate('Search')} />

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >

                    {categories ? (
                        categories.map((i) => {
                            const isactive = activeCategory === i.strCategory;
                            return (
                                <TouchableOpacity
                                    onPress={() => handleCategoryPress(i.strCategory)}
                                    style={[styles.itemContainer, isactive ? styles.selectedItemContainer : {}]}
                                >
                                    <Text style={[styles.item, isactive ? styles.selectedItem : {}]}>{i.strCategory}</Text>
                                </TouchableOpacity>
                            )
                        })
                    ) : (
                        <Text>Loading categories...</Text>
                    )}
                </ScrollView>



                {loadingCategory && <ActivityIndicator size="large" color="#B1AEAE" />}
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={recipes}
                    keyExtractor={(item) => item.idMeal}
                    renderItem={({ item }) => (
                        <Card
                            style={{ marginLeft: 24 }}
                            RecipeTitle={item.strMeal}
                            RecipeImage={item.strMealThumb}
                            onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.idMeal })}
                        />

                    )}
                />

                <Title
                    style={{ fontSize: 20, }}
                    text="Users Personal Recipes"
                />

                {isLoading && <ActivityIndicator size="large" color="#B1AEAE" />}
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={userrecipes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <RecipeCard
                            RecipeTitle={item.title}
                            image={item.featured_image}
                            ownername={item.owner.name}
                            profilepic={item.owner.profile_image}
                            onPress={() => navigation.navigate('UserRecipeDetail', { recipeId: item.id })}
                        />
                    )}
                />
            </ScrollView>
        </SafeAreaView >

    )
}


export default React.memo(Home);
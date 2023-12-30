import React,{useState, useEffect} from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import Card from "../../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";


const SingleCuisins = ({ navigation, route}) => {

    const {cuisinsId, cuisinsName} = route.params;
    const [cuisinsRecipe, setCuisinsRecipe] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    

    useEffect(() => {

        getCuisinsRecipes(cuisinsName)
    }, [cuisinsName])


    const getCuisinsRecipes = (cuisins) => {

        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisins}`)
            .then(response => {
                // console.log(response.data);
                setCuisinsRecipe(response.data.meals);
                setIsLoading(false)
            })
            .catch(error => {
                console.error('Error fetching CuisinsRecipes data from mealdbserver:', error);
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



    return (
        <SafeAreaView>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 64, columnGap: 70 }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../assets/back.png')}
                            style={{ height: 30, width: 30, marginLeft: 30 }} />
                    </TouchableOpacity>
                </View>
                <Title text={cuisinsName}/>
            </View>

            
                <View style={{ marginBottom: 240 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cuisinsRecipe}
                        style={{}}
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

export default React.memo(SingleCuisins);
import React from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import Title from "../../components/Title";
import Card from "../../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-elements/dist/helpers";
import colors from "../../constants/colors";


const RecipeDetail = ({ navigation, route, }) => {

    const Ingridents = {
        "strIngredient1": "Milk",
        "strIngredient2": "Oil",
        "strIngredient3": "Eggs",
        "strIngredient4": "Flour",
        "strIngredient5": "Baking Powder",
        "strIngredient6": "Salt",
    }

    const Instructions = {
        "Step 1": "Bring a large pot of water to a boil and season generously with salt. Bring a large pot of water to a boil and season generously with salt. Add the pasta",
        "Step 2": "Add some salt and oregano.Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta.",
        "Step 3": "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta.",
        "Step 4": "Preheat the oven to 200 degrees F.Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta.",
        "Step 5": "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta.",

    }

    const Ingridentskey = Object.keys(Ingridents)

    const Instructionkey = Object.keys(Instructions)


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

            <ScrollView style={{marginBottom: 93}}>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63O2DBTTTEI6VKN5T6FVSMYA2A.jpg&w=860' }} />
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>Steak with tomato sauce and bulgur rice.</Text>
                </View>

                <Text style={styles.HeadingTitle}>Ingridents</Text>
                {Ingridentskey?.map(key => (
                    <View key={key} style={styles.row}>
                        {/* <Text style={styles.key}>{key}</Text> */}
                        <Text style={styles.value}>{Ingridents[key]}</Text>
                    </View>
                ))}

                <Text style={styles.HeadingTitle}>Instructions</Text>
                {Instructionkey?.map(key => (
                    <View key={key} style={styles.instructionRow}>
                        <Text style={styles.index}>{key}</Text>
                        <Text style={styles.instructionText}>{Instructions[key]}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>

    )
}

export default React.memo(RecipeDetail);
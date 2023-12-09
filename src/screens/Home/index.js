import React, { useState } from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Buttons from "../../components/Buttons";
import colors from "../../constants/colors";
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Input from "../../components/Input";
import SearchInput from "../../components/SearchInput";
import Categories from "../../components/Categories";
import RecipeCard from "../../components/Recipe Card";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import Title from "../../components/Title";
import { HeartIcon } from 'react-native-heroicons/solid';





const Home = ({ navigation }) => {

    const [isFavourite, setIsFavourite] = useState(false);


    const handleCardPress = (cuisine) => {
        // Navigate to the detail screen with the selected cuisine
        navigation.navigate('RecipeDetail');
    };


    return (
        <SafeAreaView>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 64, columnGap: 110 }}>
                <View>
                    <Text style={{
                        color: colors.black,
                        fontfamily: "Poppins",
                        fontSize: 23,
                        fontWeight: 'bold',
                        lineheight: 'normal',
                        // marginTop: 64,
                        marginLeft: 30,

                    }}>Hello Azan!</Text>
                    <Text style={{
                        color: colors.black,
                        fontfamily: 'Poppins',
                        fontSize: 15,
                        fontWeight: 'normal',
                        lineheight: 'normal',
                        marginLeft: 30,
                        marginTop: 4,
                    }}>What are you cooking today?</Text>
                </View>
                <View>
                    <Image source={require('../../../assets/avatar.png')} style={{ backgroundColor: colors.orange, height: 50, width: 50, borderRadius: 10 }} />
                </View>
            </View>
            <SearchInput pressable onPress={() => navigation.navigate('Search')} />
            <View>
                <Categories categories={["Breakfast", "Chicken", "Lamb", "Dampokh", "Fries", "Baryani"]} selectedCategory="Breakfast" onCategoryPress={() => { }} />
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={['Classic Greek Salad', 'Crunchy Nut Coleslaw', 'Shrimp Chicken Andouille']}
                keyExtractor={item => String(item)}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handleCardPress(item)}>
                        <Card
                            style={{ marginLeft: 24 }}
                            RecipeTitle={item}
                        // favourite={<TouchableOpacity onPress={()=> setIsFavourite(!isFavourite)}>
                        //     <HeartIcon style={styles.SavedIcon} color={isFavourite ? "red" : "green"} />
                        // </TouchableOpacity>}
                        />
                    </TouchableOpacity>
                )}
            />

            <Title
                style={{ fontSize: 20, }}
                text="Users Personal Recipes"
            />


            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={[1, 2, 3, 4, 5]}
                keyExtractor={item => String(item)}
                renderItem={() => (
                    <RecipeCard
                        RecipeTitle='Steak with tomato sauce and bulgur rice.'
                        owner={{
                            name: 'Azan ali',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCczoMDFIc77qVeqtnJ26h8Yen0WXNfyLTIg&usqp=CAU'
                        }}
                    />
                )}
            />



        </SafeAreaView>

    )
}

export default React.memo(Home);
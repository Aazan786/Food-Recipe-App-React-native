import React from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, FlatList } from "react-native";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import FavCard from "../../components/Fav Card";
import { ScrollView } from "react-native-gesture-handler";


const Favourite = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 50, columnGap: 40, marginLeft: 95 }}>
                <Title
                    style={{}}
                    text="Favourite recipes"
                />
            </View>
         
                <View style={{ marginBottom: 240 }}>
                    <FlatList
                        // horizontal
                        showsVerticalScrollIndicator={false}
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        style={{}}
                        keyExtractor={item => String(item)}
                        renderItem={() => (
                            <FavCard
                                style={{ marginLeft: 24 }}
                                RecipeTitle='Steak with tomato sauce and bulgur rice.'
                            />
                        )}

                        numColumns={2}
                    />
                </View>
            

        </SafeAreaView>

    )
}

export default React.memo(Favourite);
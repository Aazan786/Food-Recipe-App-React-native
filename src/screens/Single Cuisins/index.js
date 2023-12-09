import React from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import Card from "../../components/Card";
import { ScrollView } from "react-native-gesture-handler";


const SingleCuisins = ({ navigation }) => {

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
                <Title text="African" />
            </View>

            <ScrollView>
                <View style={{ marginBottom: 240 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        style={{}}
                        keyExtractor={item => String(item)}
                        renderItem={() => (
                            <Card
                                style={{ marginLeft: 24 }}
                                RecipeTitle='Steak with tomato sauce and bulgur rice.'
                            />
                        )}

                        numColumns={2}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

export default React.memo(SingleCuisins);
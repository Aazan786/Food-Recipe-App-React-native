import React from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, FlatList } from "react-native";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import CuisinsCard from "../../components/Cuisins Card";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";



const Cuisins = ({ navigation }) => {

    const handleCardPress = (cuisine) => {
        // Navigate to the detail screen with the selected cuisine
        navigation.navigate('SingleCuisins');
    };

    return (
        <SafeAreaView>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 50, columnGap: 40, marginLeft: 130 }}>
                <Title text="Cuisins" />
            </View>
            {/* <ScrollView> */}
                <View style={{ marginBottom: 243 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={['African', 'Asian', 'European', 'American', 'British', 'Itily', 'American', 'British', 'Itily']}
                        keyExtractor={item => String(item)}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleCardPress(item)}>
                                <CuisinsCard
                                    style={{ marginLeft: 24 }}
                                    Title={item}
                                />
                            </TouchableOpacity>
                        )}
                        numColumns={2}
                    />
                </View>
            {/* </ScrollView> */}

        </SafeAreaView>

    )
}

export default React.memo(Cuisins);
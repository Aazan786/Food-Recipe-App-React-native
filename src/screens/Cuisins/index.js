import React from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView, FlatList, } from "react-native";
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import CuisinsCard from "../../components/Cuisins Card";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { CuisinsCategory } from '../../constants/colors';



const Cuisins = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 50, columnGap: 40, marginLeft: 130 }}>
                <Title text="Cuisins" />
            </View>
            
                <View style={{ marginBottom: 243 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={CuisinsCategory}
                        keyExtractor={item => (item.strId)}
                        renderItem={({ item }) => (
                                <CuisinsCard
                                    style={{ marginLeft: 24 }}
                                    Title={item.strArea}
                                    image={item.strImage}
                                    onPress={() => navigation.navigate('SingleCuisins', { cuisinsName: item.strArea, cuisinsId: item.strId })}
                                />
                        )}
                        numColumns={2}
                    />
                </View>

        </SafeAreaView>

    )
}

export default React.memo(Cuisins);
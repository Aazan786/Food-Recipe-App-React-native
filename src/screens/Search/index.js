import React from "react";
import styles from "./style";
import { ImageBackground, Text, View, Image, SafeAreaView } from "react-native";
import Buttons from "../../components/Buttons";
import colors from "../../constants/colors";
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Input from "../../components/Input";
import SearchInput from "../../components/SearchInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import Title from "../../components/Title";



const Search = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 64, columnGap: 40}}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                    source={require('../../../assets/back.png')}
                    style={{height: 30, width: 30, marginLeft: 30 }} />
                    </TouchableOpacity>
                </View>

               <Title text="Search Recipes"/>
                {/* <View>
                    <Text style={{
                        color: colors.black,
                        fontfamily: "Poppins",
                        fontSize: 23,
                        fontWeight: 'bold',
                        lineheight: 'normal',
                        // marginTop: 64,
                        marginLeft: 30,
                    }}>Search Recipes</Text>
                </View> */}
            </View>
            <SearchInput />
        </SafeAreaView>

    )
}

export default React.memo(Search);
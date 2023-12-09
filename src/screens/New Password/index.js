import React from "react";
import styles from "./style";
import Buttons from "../../components/Buttons";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';
import Title from "../../components/Title";
// import { Input, Icon } from 'react-native-elements';
import colors from "../../constants/colors";
import Input from "../../components/Input";



const NewPassword = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.Title}>New Password</Text>
                <Input placeholder='New Password' iconName="lock"iconSize={17}></Input>
                <Input placeholder='Confirm Password' iconName="lock"iconSize={17}></Input>

                <TouchableOpacity onPress={() => navigation.navigate('Signin')} style={styles.buttoncontainer}>
                    <Text
                        style={styles.text}>
                        Reset
                    </Text>
                    <Image style={styles.icon} source={require('../../../assets/Arrow-Right.png')} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(NewPassword);



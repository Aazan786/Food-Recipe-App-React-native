import React from "react";
import styles from "./style";
import Buttons from "../../components/Buttons";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';
import Title from "../../components/Title";
// import { Input, Icon } from 'react-native-elements';
import colors from "../../constants/colors";
import Input from "../../components/Input";



const ForgotPassword = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../assets/back.png')}
                            style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.Title}>Forgot Password</Text>
                <Text style={styles.subtitle}>Enter Email Address</Text>
                <Input placeholder='Email' iconName="envelope" iconSize={14}></Input>


                <TouchableOpacity onPress={() => navigation.navigate('SendEmail')} style={styles.buttoncontainer}>
                    <Text
                        style={styles.text}>
                        Send
                    </Text>
                    <Image style={styles.icon} source={require('../../../assets/Arrow-Right.png')} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(ForgotPassword);



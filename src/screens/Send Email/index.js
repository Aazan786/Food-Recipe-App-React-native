import React from "react";
import styles from "./style";
import Buttons from "../../components/Buttons";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';
import { EnvelopeIcon } from "react-native-heroicons/outline";
import colors from "../../constants/colors";


const SendEmail = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{marginLeft: 140, marginTop: 50, marginVertical: -20,}}>
                    <EnvelopeIcon color="#173147" size={60}/>
                </View>
                <Text style={styles.Title}>Check Your Email</Text>
                <Text style={styles.subtitle}>We have sent you an email with 6 digit OTP. Enter that OTP during password reset as it will be expire withn 4 minutes.</Text>
                
                <TouchableOpacity onPress={() => navigation.navigate('NewPassword')} style={styles.buttoncontainer}>
                    <Text
                        style={styles.text}>
                        Reset Password
                    </Text>
                    <Image style={styles.icon} source={require('../../../assets/Arrow-Right.png')} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(SendEmail);



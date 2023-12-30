import React, { useState, useEffect } from "react";
import styles from "./style";
import colors from "../../constants/colors";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView, View, Alert,ActivityIndicator} from 'react-native';
import Input from "../../components/Input";
import axios from "axios";
import { API_BASE_URL } from "../../api/api";



const ForgotPassword = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSendEmail = () => {

        if (!email) {
            Alert.alert('Validation Error', 'Please enter email.');
            return;
        }

        setLoading(true);
        axios.post(`${API_BASE_URL}/api/users/sendresetpasswordemail`, { email}, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {

                if (response.status === 200) {
                    Alert.alert("Success", "Email Sent Successfully!")

                    setemail('');

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'SendEmail' }],
                    });
                }
                else {
                    Alert.alert("Error", response.data.detail || "Something went wrong. Please try again.");
                }
            })
            .catch(error => {
                console.log(error);
                Alert.alert('You are not a Registered User.');
            })
            .finally(() => {
                setLoading(false);
            });

    };

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
                <Input 
                placeholder='Email'
                iconName="envelope"
                iconSize={14}
                value={email}
                onChangeText={setemail}
                >
                </Input>
                <TouchableOpacity style={styles.buttoncontainer} onPress={handleSendEmail}>
                    {loading ? (
                        <ActivityIndicator size="small" color={colors.white} />
                    ) : (
                        <>
                            <Text style={styles.text}>Send</Text>
                            <Image style={styles.icon} source={require('../../../assets/Arrow-Right.png')} />
                        </>
                    )}
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(ForgotPassword);



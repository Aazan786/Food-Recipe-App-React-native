import React, { useState} from "react";
import styles from "./style";
import colors from "../../constants/colors";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView, View, Alert,ActivityIndicator } from 'react-native';
import Input from "../../components/Input";
import axios from "axios";
import { API_BASE_URL } from "../../api/api";




const NewPassword = ({ navigation }) => {

    const [verification_code, setVerificationCode] = useState('');
    const [password, setNewPassword] = useState('');
    const [password2, setconfirmPassword] = useState('');
    const [loading, setLoading] = useState(false)


    const handlenewpassword = () => {

        if (!verification_code || !password || !password2) {
            Alert.alert('Validation Error', 'Please fill in all the fields.');
            return;
        }

        if (password !== password2) {
            Alert.alert("Error", "Password and Confirm Password does not match");
            return;
        }


        setLoading(true);
        axios.post(`${API_BASE_URL}/api/users/resetpassword`, { verification_code, password, password2}, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {

                if (response.status === 200) {
                    Alert.alert("Success", "Password Reset Successfully!")

                    setVerificationCode('');
                    setNewPassword('');
                    setconfirmPassword('');

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Signin' }],
                    });
                }
                else {
                    Alert.alert("Error", response.data.detail || "Something went wrong. Please try again.");
                }
            })
            .catch(error => {
                console.log(error);
                Alert.alert('Invalid verification code or expired.');
            })
            .finally(() => {
                setLoading(false);
            });

    };


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.Title}>New Password</Text>
                <Input
                placeholder='Verification Code'
                iconName="lock"
                iconSize={17}
                value={verification_code}
                onChangeText={setVerificationCode}
                >
                </Input>

                <Input 
                placeholder='New Password'
                iconName="lock"
                iconSize={17}
                value={password}
                onChangeText={setNewPassword}
                >
                </Input>

                <Input 
                placeholder='Confirm Password' 
                iconName="lock" 
                iconSize={17}
                value={password2}
                onChangeText={setconfirmPassword}
                >
                </Input>

                <TouchableOpacity style={styles.buttoncontainer} onPress={handlenewpassword}>
                    {loading ? (
                        <ActivityIndicator size="small" color={colors.white} />
                    ) : (
                        <>
                            <Text style={styles.text}>Confirm</Text>
                            <Image style={styles.icon} source={require('../../../assets/Arrow-Right.png')} />
                        </>
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=> navigation.navigate('Signin')} style={styles.buttoncontainer}>
                    <Text
                        style={styles.text}>
                        Login
                    </Text>
                    <Image style={styles.icon} source={require('../../../assets/Arrow-Right.png')} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(NewPassword);



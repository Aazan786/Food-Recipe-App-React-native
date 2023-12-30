import React, { useState, useContext } from "react";
import styles from "./style";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView, Pressable, Alert, ActivityIndicator } from 'react-native';
import colors from "../../constants/colors";
import Input from "../../components/Input";
import axios from "axios";
import { AppContext } from "../../context/context";
import { API_BASE_URL } from "../../api/api";




const Signin = ({ navigation }) => {
    const { setToken, setUser } = useContext(AppContext);

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setLoading] = useState(false)

    const isValidEmail = (email) => {
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');

        const isAtSymbolPresent = atIndex !== -1;
        const isAtSymbolNotFirst = atIndex !== 0;
        const isDotAfterAtSymbol = dotIndex !== -1 && dotIndex > atIndex + 1;
        const isDotNotLast = dotIndex !== email.length - 1;

        return (
            isAtSymbolPresent &&
            isAtSymbolNotFirst &&
            isDotAfterAtSymbol &&
            isDotNotLast
        );
    };



    const handleSignin = () => {
        if (!email || !password) {
            Alert.alert('Validation Error', 'Please enter both email and password.');
            return;
        }

        if (!isValidEmail(email)) {
            Alert.alert('Validation Error', 'Please enter a valid email address.');
            return;
        }

        setLoading(true);
       
        axios.post(`${API_BASE_URL}/api/users/login`, {email, password}, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.status === 200) {
                    const accessToken = response.data.Token.access;
                    setToken(accessToken);
                    Alert.alert("Success", "Login Success!")


                    axios.get(`${API_BASE_URL}/api/profile`, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    })
                        .then(userResponse => {
                            setUser(userResponse.data);


                        })
                        .catch(error => {
                            console.error('Error fetching user data:', error);
                        });
                    setemail('');
                    setpassword('');

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }
                else {

                    Alert.alert("Error", response.data.detail || "Something went wrong. Please try again.");
                }
            })
            .catch(error => {
                console.log(error);
                Alert.alert('Login Failed', 'Email or password is incorrect.');
            })
            .finally(() => {
                setLoading(false);
            });

    };


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.Title}>Hello,</Text>
                <Text style={styles.subtitle}>Welcome Back!</Text>

                <Input
                    placeholder='Email'
                    iconName="envelope"
                    iconSize={14}
                    value={email}
                    onChangeText={setemail}
                />
                <Input
                    placeholder='Password'
                    iconName="lock"
                    iconSize={17}
                    secureTextEntry
                    value={password}
                    onChangeText={setpassword}
                />

                <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotpassword}>Forgot Password</Text>
                </Pressable>

                <TouchableOpacity style={styles.buttoncontainer} onPress={handleSignin}>
                    {loading ? (
                        <ActivityIndicator size="small" color={colors.white} />
                    ) : (
                        <>
                            <Text style={styles.text}>Sign in</Text>
                            <Image style={styles.icon} source={require('../../../assets/Arrow-Right.png')} />
                        </>
                    )}
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Don't have an account?
                    <Text
                        onPress={() => navigation.navigate('Signup')}
                        style={styles.footerLink}>
                        {' '}
                        Sign up!
                    </Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Signin);



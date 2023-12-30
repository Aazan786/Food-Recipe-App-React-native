import React, { useState } from "react";
import styles from "./style";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert } from 'react-native';
import Input from "../../components/Input";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import colors from "../../constants/colors";
import axios from "axios";
import { API_BASE_URL } from "../../api/api";



const Signup = ({ navigation }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        tc: false,
    });
    const [loading, setLoading] = useState(false);

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

    const handleSignup = () => {
        // Validate form fields
        if (!formData.name || !formData.email || !formData.password || !formData.password2) {
            Alert.alert("Error", "Please fill in all the fields.");
            return;
        }

        if (!formData.tc) {
            Alert.alert("Error", "Please agree to the terms and conditions.");
            return;
        }

        if (formData.password !== formData.password2) {
            Alert.alert("Error", "Password and Confirm Password does not match");
            return;
        }

        if (!isValidEmail(formData.email)) {
            Alert.alert('Validation Error', 'Please enter a valid email address.');
            return;
        }

        setLoading(true);
        axios.post(`${API_BASE_URL}/api/users/signup`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.status === 201) {
                    // Successful signup
                    Alert.alert("Success", "Account created successfully!", [
                        { text: "OK", onPress: () => navigation.navigate('Signin') }
                    ]);
                } else {

                    Alert.alert("Error", response.data.detail || "Something went wrong. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error during signup:", error);
                Alert.alert("Error", "An unexpected error occurred. Please try again later.");
            })
            .finally(() => {
                setLoading(false);
            });
    };


    const toggleCheckbox = () => setFormData(prevState => ({ ...prevState, tc: !formData.tc }));

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView Style={styles.scrollView}>

                <Text style={styles.title}>Create an account</Text>
                <Text style={styles.subtitle}>Let’s help you set up your account,
                    {'                                    '}
                    it won’t take long.</Text>

                <Input
                    placeholder='Name'
                    iconName="user"
                    iconSize={17}
                    value={formData.name}
                    onChangeText={(text) => setFormData({ ...formData, name: text })}
                />

                <Input
                    placeholder='Email'
                    iconName="envelope"
                    iconSize={14}
                    keyboardType="email-address"
                    value={formData.email}
                    onChangeText={(text) => setFormData({ ...formData, email: text })}
                />

                <Input
                    placeholder='Password'
                    iconName="lock"
                    iconSize={17}
                    secureTextEntry
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                />

                <Input
                    placeholder='Confirm Password'
                    iconName="lock"
                    iconSize={17}
                    secureTextEntry
                    value={formData.password2}
                    onChangeText={(text) => setFormData({ ...formData, password2: text })}
                />

                <CheckBox
                    containerStyle={{ backgroundColor: "transparent", marginLeft: -6 }}
                    title={"Agree with terms and conditions"}
                    textStyle={{ color: colors.orange }}
                    checkedColor={colors.orange}
                    uncheckedColor={colors.orange}
                    checked={formData.tc}
                    onPress={toggleCheckbox}
                />

                <TouchableOpacity style={styles.buttoncontainer} onPress={handleSignup}>
                    {loading ? (
                        <ActivityIndicator size="small" color={colors.white} />
                    ) : (
                        <>
                            <Text style={styles.text}>Sign Up</Text>
                            <Image style={styles.icon} source={require('../../../assets/Arrow-Right.png')} />
                        </>
                    )}
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Already a member?
                    <Text
                        onPress={() => navigation.navigate('Signin')}
                        style={styles.footerLink}>
                        {' '}
                        Sign in!
                    </Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Signup);

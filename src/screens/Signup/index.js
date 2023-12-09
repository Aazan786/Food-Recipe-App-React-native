import React from "react";
import styles from "./style";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, View } from 'react-native';
import Input from "../../components/Input";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import colors from "../../constants/colors";
import { useState } from "react";

const Signup = ({ navigation }) => {
    const [checked, setChecked] = useState(false);

    function ch() {
        if (checked) {
            setChecked(false)
            return;
        }
        setChecked(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView Style={styles.scrollView}>

                <Text style={styles.title}>Create an account</Text>
                <Text style={styles.subtitle}>Let’s help you set up your account,
                    {'                                    '}
                    it won’t take long.</Text>
                <Input placeholder='Name' iconName="user" iconSize={17}></Input>
                <Input placeholder='Email' iconName="envelope" iconSize={14} keyboardType="email-address"></Input>
                <Input placeholder='Password' iconName="lock" iconSize={17}  secureTextEntry></Input>
                <Input placeholder='Confirm Password' iconName="lock" iconSize={17}  secureTextEntry></Input>

                <CheckBox containerStyle={{ backgroundColor: "transparent", marginLeft: -6 }}
                title={"Agree with terms and conditions"} textStyle={{ color: colors.orange }}
                checkedColor={colors.orange} uncheckedColor={colors.orange}
                checked={checked} onPress={ch} 
                />


                <TouchableOpacity onPress style={styles.buttoncontainer}>
                    <Text style={styles.text}>Sign Up</Text>
                    <Image style={styles.icon} source={require('../../../assets/Arrow-Right.png')} />
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

    )
}

export default React.memo(Signup);
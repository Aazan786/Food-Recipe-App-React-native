import React from "react";
import styles from "./style";
import Buttons from "../../components/Buttons";
import {SafeAreaView, Text, TouchableOpacity, Image, ScrollView, Pressable} from 'react-native';
import Title from "../../components/Title";
// import { Input, Icon } from 'react-native-elements';
import colors from "../../constants/colors";
import Input from "../../components/Input";



const Signin = ({navigation}) => {
return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <Text style={styles.Title}>Hello,</Text>
        <Text style={styles.subtitle}>Welcome Back!</Text>
        <Input placeholder='Email' iconName="envelope"iconSize={14}></Input>
        <Input placeholder='Password' iconName="lock"iconSize={17} secureTextEntry></Input>
        
        <Pressable onPress = {()=> navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotpassword}>Forgot Password</Text>
        </Pressable>
        <TouchableOpacity  onPress = {()=> navigation.navigate('Home')}  style={styles.buttoncontainer}>
            <Text
            style={styles.text}>
            Login
            </Text>
            <Image style={styles.icon}source={require('../../../assets/Arrow-Right.png')}/>
        </TouchableOpacity>
       
        <Text style={styles.footerText}>
          Don't have an account? 
          <Text
           onPress = {()=> navigation.navigate('Signup')}
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



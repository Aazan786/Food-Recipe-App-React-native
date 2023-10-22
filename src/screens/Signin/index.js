import React from "react";
import styles from "./style";
import Buttons from "../../components/Buttons";
import {SafeAreaView, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Title from "../../components/Title";
// import { Input, Icon } from 'react-native-elements';
import colors from "../../constants/colors";
import Input from "../../components/Input";



const Signin = ({navigation}) => {
return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
        <Title>Hello,</Title>
        <Text style={styles.subtitle}>Welcome Back!</Text>
        <Input placeholder='Email' iconName="envelope"iconSize={14}></Input>
        <Input placeholder='Password' iconName="lock"iconSize={17}></Input>

        <TouchableOpacity onPress  style={styles.buttoncontainer}>
            <Text style={styles.text}>Login</Text>
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



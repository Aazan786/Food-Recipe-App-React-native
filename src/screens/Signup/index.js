import React from "react";
import styles from "./style";
import {SafeAreaView, Text, TouchableOpacity, Image,ScrollView,KeyboardAvoidingView, View} from 'react-native';
import Buttons from "../../components/Buttons";
import Title from "../../components/Title";
import Input from "../../components/Input";

const Signup = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView Style={styles.scrollView}>
      
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Let’s help you set up your account,
        {'                                    '}
         it won’t take long.</Text>
        <Input placeholder='Name' iconName="user"  iconSize={17}></Input>
        <Input placeholder='Email' iconName="envelope" iconSize={14}></Input>
        <Input placeholder='Password' iconName="lock"  iconSize={17}></Input>
        <Input placeholder='Confirm Password' iconName="lock" iconSize={17}></Input>
    

        <TouchableOpacity onPress  style={styles.buttoncontainer}>
            <Text style={styles.text}>Sign Up</Text>
            <Image style={styles.icon}source={require('../../../assets/Arrow-Right.png')}/>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Already a member? 
          <Text
           onPress = {()=> navigation.navigate('Signin')}
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
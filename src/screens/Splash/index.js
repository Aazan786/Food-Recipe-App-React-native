import React from "react";
import styles from "./style";
import {ImageBackground, Text, View, Image} from "react-native";
import Buttons from "../../components/Buttons";


const Splash = ({navigation}) => {
    return(
        <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
            <View style={styles.container}>
                <Image style={styles.logo}source={require('../../../assets/logo.png')}/>
                <Text style={styles.title}>100K+ Premium Recipe</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.bigTitle}>Get</Text>
                <Text style={styles.bigTitle}>Cooking</Text>
                <Text style={styles.subTitle}>Simple way to find Tasty Recipe</Text>
                <Buttons onpress = {()=> navigation.navigate('Signin')}>Start Cooking</Buttons>
            </View>
        </ImageBackground>
    
    )
}

export default React.memo(Splash);
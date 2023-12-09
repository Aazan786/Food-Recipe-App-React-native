import React from 'react';
import { Text } from 'react-native';
import styles from "./style";
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const CuisinsCard = ({ Title, image, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Image style={styles.image} source={{ uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg' }} />
           
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.65)']} // Adjust the opacity as needed
                style={styles.gradient}
            />
             <Text style={styles.title}>{Title}</Text>
        </View>
    );
};

export default React.memo(CuisinsCard);

import React from 'react';
import { Text } from 'react-native';
import styles from "./style";
import { View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CuisinsCard = ({ Title, image, style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, style]}>
            <Image style={styles.image} source={{ uri: image }} />
           
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.65)']} // Adjust the opacity as needed
                style={styles.gradient}
            />
             <Text style={styles.title}>{Title}</Text>
        </View>
        </TouchableOpacity>
    );
};

export default React.memo(CuisinsCard);

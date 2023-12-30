import React from 'react';
import { Text } from 'react-native';
import styles from "./style";
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { API_BASE_URL } from "../../api/api";



const UserRecipeCard = ({ Title, image, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Image style={styles.image} source={{  uri: `${API_BASE_URL}/${image}`}} />
           
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.65)']}
                style={styles.gradient}
            />
                <Text  numberOfLines={2} style={styles.title}>{Title}</Text>
        </View>
    );
};

export default React.memo(UserRecipeCard);

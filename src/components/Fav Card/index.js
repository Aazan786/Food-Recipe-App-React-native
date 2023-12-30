import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./style";
import { View, Image } from 'react-native';
import { API_BASE_URL } from '../../api/api';


const FavCard = ({ RecipeTitle, image, style, onPress}) => {
        return (
            <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, style]}>
                <Image style={styles.image} source={{ uri: `${API_BASE_URL}/${image}`}} />
                <Text  numberOfLines={3} ellipsizeMode="tail" style={styles.title}>{RecipeTitle}</Text>
                <Image style={styles.SavedIcon} source={require('../../../assets/love.png')} />
            </View>
            </TouchableOpacity>
        );
    };

export default React.memo(FavCard);

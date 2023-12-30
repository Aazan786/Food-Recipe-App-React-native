import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from "./style";
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Card = ({ RecipeTitle, RecipeImage, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, style]}>
                <Image style={styles.image} source={{ uri: RecipeImage }} />
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{RecipeTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(Card);

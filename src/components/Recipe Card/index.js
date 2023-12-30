import React, { useEffect, useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./style";
import { View, Image } from 'react-native';
import { API_BASE_URL } from "../../api/api";



const RecipeCard = ({ RecipeTitle, image, ownername, profilepic, style, onPress }) => {


    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, style]}>
                <View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.Title}>{RecipeTitle}</Text>
                    <Image style={styles.image} source={{ uri: `${API_BASE_URL}/${image}` }} />
                </View>

                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                    <View style={styles.row}>
                        <Image style={styles.authorImage} source={{ uri: `${API_BASE_URL}/${profilepic}` }} />
                        <Text style={styles.authorName}>By {ownername}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};



export default React.memo(RecipeCard);

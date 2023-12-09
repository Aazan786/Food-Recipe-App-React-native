import React from 'react';
import { Text } from 'react-native';
import styles from "./style";
import { View, Image } from 'react-native';


const RecipeCard = ({ RecipeTitle, image, owner, favourite, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.Title}>{RecipeTitle}</Text>
                <Image style={styles.image} source={{ uri: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg' }} />
            </View>


            <View style={[styles.row, { justifyContent: 'space-between' }]}>
                <View style={styles.row}>
                    <Image style={styles.authorImage} source={{ uri: owner?.image }} />
                    <Text style={styles.authorName}>By {owner?.name}</Text>
                </View>

                <View style={styles.row}>
                    <Image style={styles.SavedIcon} source={require('../../../assets/love.png')} />
                </View>
            </View>

        </View>
    );
};


export default React.memo(RecipeCard);

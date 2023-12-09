import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import styles from "./style";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
    return (
        <FlatList
            horizontal
            data={categories}
            keyExtractor={item => String(item)}
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -14, marginTop: 6 }}
            renderItem={({ item, index }) => {
                const selected = selectedCategory === item;

                return (
                    <TouchableOpacity
                        onPress={() => onCategoryPress(item)}
                        style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}, index === 0 ? { marginLeft: 43 } : {}]}
                    >
                        <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default React.memo(Categories);
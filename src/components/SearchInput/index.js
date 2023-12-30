import React, { useState, useContext, useEffect } from "react";
import styles from "./style";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import { Pressable } from "react-native";

const SearchInput = ({ placeholder, showSearchIcon, pressable, onPress, onSearchChange }) => {
    const [text, setText] = useState("");

    const handlePress = () => {
        if (onPress) {
            onPress(text);
        }
    };

    const handleTextChange = (inputText) => {
        setText(inputText);
        if (onSearchChange) {
            onSearchChange(inputText);
        }
    };

    const renderItem = () => (
        <View style={styles.container}>
            {showSearchIcon ? (
                <Image source={require('../../../assets/search.png')} style={styles.icon} />
            ) : null}
            <TextInput
                editable={!pressable}
                placeholderTextColor={colors.lightgrey}
                placeholder={placeholder}
                style={styles.input}
                onChangeText={handleTextChange}
                value={text}
            />
        </View>
        
    )

    if (pressable) {
        return (
            <Pressable onPress={handlePress}>
                {renderItem()}
            </Pressable>
        )
    }

    return renderItem()
   
}



SearchInput.defaultProps = {
    placeholder: 'Search Recipe',
    showSearchIcon: true
}
export default React.memo(SearchInput);
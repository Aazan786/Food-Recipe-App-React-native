import React from "react";
import styles from "./style";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import { Pressable } from "react-native";

const SearchInput = ({ placeholder, showSearchIcon, pressable, onPress }) => {
    const renderItem = () => (
        <View style={styles.container}>
            {showSearchIcon ? (
                <Image source={require('../../../assets/search.png')} style={styles.icon} />
            ) : null}
            <TextInput editable={!pressable} placeholderTextColor={colors.lightgrey} placeholder={placeholder} style={styles.input} />
        </View>
    )

    if (pressable) {
        return (
            <Pressable onPress={onPress}>
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
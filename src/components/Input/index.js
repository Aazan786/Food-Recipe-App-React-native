import React from "react";
import styles from "./style";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import { FontAwesome } from "@expo/vector-icons";


const Input = ({ iconName, iconSize, value, onChangeText, ...props }) => {
    return (
        <View style={styles.container}>
            <FontAwesome name={iconName} style={[styles.icon, { fontSize: iconSize }]} />
            <TextInput placeholderTextColor={colors.darkgrey}
                // keyboardType= {keyboardType}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                {...props}
            />
        </View>
    )

}




export default React.memo(Input);
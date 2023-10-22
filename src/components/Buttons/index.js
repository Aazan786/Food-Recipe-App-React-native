import React from "react";
import styles from "./style";
import { TouchableOpacity, Image} from "react-native";
import {Text} from "react-native";

const Button = ({onpress, children}) => {
    return(
        <TouchableOpacity onPress ={onpress} style={styles.container}>
            <Text style={styles.text}>{children}</Text>
            <Image style={styles.icon}source={require('../../../assets/Arrow-Right.png')}/>
        </TouchableOpacity>
    )
}
export default React.memo(Button);
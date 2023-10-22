import React from "react";
import styles from "./style";
import {Text} from "react-native";

const Title = ({children}) => {
    return(
       <Text style={styles.title}>{children}</Text>
    )
}

export default React.memo(Title);
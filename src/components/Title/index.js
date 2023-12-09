import React from 'react';
import { Text } from 'react-native';
import styles from "./style";


const Title = ({ text, style }) => {
    return (
        <Text style={[styles.title, style]}>{text}</Text>
    );
};

Title.defaultProps = {
    text: 'Title'
};

export default React.memo(Title);

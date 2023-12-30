import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    item: {
        fontSize: 15,
        color: colors.green,
        fontWeight: 'bold',
        padding: 4,
        paddingHorizontal: 10,
    },
    selectedItem: {
        color: colors.white
    },
    itemContainer: {
        marginRight: -8,
        marginBottom: 14,
        marginLeft: 18,
    },
    selectedItemContainer: {
        backgroundColor: colors.green,
        borderRadius: 10,
    },

    username:{
        color: colors.black,
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    tagline:{
        color: colors.black,
        fontSize: 15,
        fontWeight: 'normal',
        marginLeft: 30,
        marginTop: 4,
    }
});

export default styles;
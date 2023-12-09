import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        backgroundColor: 'rgba(217,217,217,0.5)',
        padding: 10,
        width: width * 0.4,
        marginVertical: 32,
        marginTop: 65,
        marginLeft: 30,
        marginRight: 16,

    },
    title: {
        fontSize: 18,
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -60,
        alignSelf: 'center'
    },
    SavedIcon: {
        width: 25,
        height: 25,
        marginRight: 8, 
        marginTop: 4,
        marginLeft:113,
        tintColor: colors.green,
    }
});

export default styles;
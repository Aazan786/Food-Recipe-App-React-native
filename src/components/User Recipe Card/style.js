import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        //     borderRadius: 12,
        //     backgroundColor: 'rgba(217,217,217,0.5)',
        // paddingBottom: 10,
        width: width * 0.70,
        // marginVertical: -10,
        marginTop: -10,
        //     marginLeft: 30,
        marginRight: 1,
        marginBottom: 20,
    },

    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 30,
        height: '91%',
        width: 330,
        borderRadius: 10,
    },

    title: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 10,
        marginLeft: 3,
        marginTop: -45,
        width: 400,
    },

    image: {
        width: 330,
        height: 200,
        borderRadius: 10,
        marginTop: 30,

        // alignSelf: 'center'
    },

});

export default styles;
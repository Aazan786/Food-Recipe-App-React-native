import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
    //     borderRadius: 12,
    //     backgroundColor: 'rgba(217,217,217,0.5)',
    //     padding: 10,
    //     width: width * 0.4,
        //  marginVertical: 10,
        marginTop: -10,
    //     marginLeft: 30,
    //     marginRight: 16,
    marginBottom: 9

    },

    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 30,
        height: '89%',
        borderRadius: 10,
      },

    title: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginVertical: 10,
        marginRight: 80,
        marginTop: -34
       
    
    },

    image: {
        width: 170,
        height: 170,
        borderRadius: 10,
        marginTop: 30,
        // marginBottom:-10

        // alignSelf: 'center'
    },
   
});

export default styles;
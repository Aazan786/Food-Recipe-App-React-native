import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: colors.white,
        padding: 10,
        width: width * 0.7,
        marginBottom:32,
        marginTop: 48,
        marginLeft: 30,
        height: 90,
        

        // iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        // Android
        elevation: 9,
    },

    Title: {
        fontSize: 18,
        color: colors.black,
        fontWeight: 'bold',
        maxWidth: 170,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginTop: 8
    },
    authorName: {
        color: colors.lightgrey,
        fontSize: 11,
    },
    authorImage: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginRight: 8,
    },
    SavedIcon: {
        width: 25,
        height: 25,
        marginRight: 8, 
        marginTop: 4,
        tintColor: colors.darkgrey
    },
    image: {
        width: 83,
        height: 83,
        borderRadius: 50,
        marginTop: -68,
        marginLeft:180,
    }
});

export default styles;
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 80,
        // paddingVertical: 100,

    },

    subtitle: {
        color: '#121212',
        fontSize: 20,
        fontWeight: 'normal',
        paddingVertical: 4,
        marginBottom: 50,
    },

    footerText:{
        color: colors.black,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 28,
        marginTop: 32,
    },

    footerLink:{
        color: colors.orange,
        fontWeight: 'bold',
        fontSize: 16,
    }, 

    buttoncontainer: {
        backgroundColor: colors.green,
        flexDirection: 'row',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 15,
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 20,
    },

    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '600',
        alignItems: "center",
    },

    icon: {
        width: 24,
        height: 24,
        marginLeft: 12
    },
}
)
export default styles;

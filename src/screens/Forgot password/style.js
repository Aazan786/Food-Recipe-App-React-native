import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 80,

    },

    Title: {
        color: colors.black,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 98,
        marginTop: -33,
    },
                                           
    subtitle: {
        color: '#121212',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: -5,
        marginTop: 100,
    },

    forgotpassword:{
        color: colors.orange,
        fontWeight: 'normal',
        fontSize: 15,
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

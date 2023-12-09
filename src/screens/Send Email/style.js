import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 120,

    },

    Title: {
        color: colors.black,
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 65,
        marginTop: 20,
    },
                                           
    subtitle: {
        color: colors.black,
        fontSize: 17,
        fontWeight: 'normal',
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: 'rgba(217,217,217,0.5)',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginVertical: 4,
        marginLeft: 15,
        marginRight:30,
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

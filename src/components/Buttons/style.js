import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        flexDirection: 'row',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 15,
        alignSelf: "center",
        borderRadius: 10,
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
    }
})

export default styles;
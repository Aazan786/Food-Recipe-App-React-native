import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
        marginTop:10,

    },

    TitleContainer:{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: colors.lightgrey,
        paddingHorizontal: 10,
        // paddingVertical: 13,
        borderRadius: 10,
        color: colors.lightgrey,
        marginVertical: 15,
      },

      IngridentsContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: colors.lightgrey,
        paddingHorizontal: 10,
        // paddingVertical: 13,
        borderRadius: 10,
        color: colors.lightgrey,
        marginVertical: 15,
      },

      InstructionContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: colors.lightgrey,
        paddingHorizontal: 10,
        // paddingVertical: 40,
        borderRadius: 10,
        color: colors.lightgrey,
        marginVertical: 15,
      },

      input: {
        flex: 1,
        backgroundColor: "transparent",
        color: colors.black,
        fontWeight: "700",
        fontSize: 17,
      }
})

export default styles;
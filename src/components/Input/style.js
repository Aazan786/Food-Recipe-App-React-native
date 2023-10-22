import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: colors.lightgrey,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 10,
        color: colors.lightgrey,
        marginVertical: 15,
      },
      input: {
        flex: 1,
        backgroundColor: "transparent",
        color: colors.black,
        fontWeight: "500",
      },
    icon: {
        marginRight: 5,
        color: colors.darkgrey,
      },
})
export default styles;
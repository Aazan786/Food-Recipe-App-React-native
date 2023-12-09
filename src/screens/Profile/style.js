import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130,
        borderRadius: 90,
        marginTop: 15,
        alignSelf: 'center',
        marginRight: 220
    },
    recipe:{
        fontSize: 20,
        color: colors.darkgrey,
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: -100,
        marginLeft: 40,
        // marginVertical: 10,
    },
    recipecounter:{
        fontSize: 25,
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 40,
    },
    description:{
        fontSize: 15,
        color: colors.darkgrey,
        fontWeight: 'normal',
        textAlign: 'left',
        marginTop: -50,
        marginLeft: 30,
    },
    username:{
        marginVertical: 50,
        fontSize: 20,
    },
    editprofile:{
        fontSize: 20,
        color: colors.darkgrey,
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: -25,
        marginLeft: 290,
    },
    recipetitle:{
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 30,
        backgroundColor: colors.green,
        alignItems: 'left',
        borderRadius: 10,
        paddingHorizontal: 60,
        paddingVertical: 10,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 30,
        marginRight:190,
    },

    

})

export default styles;
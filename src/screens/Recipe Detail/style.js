import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({


    container: {
        paddingHorizontal: 24,
        flex: 1,
        // marginBottom: 200,
        
       

    },

    image: {
        width: 350,
        height: 200,
        borderRadius: 10,
        alignSelf: "center",
        marginBottom: 12,
        marginTop: 20,

    },

    title: {
        color: colors.black,
        fontfamily: "Poppins",
        fontSize: 23,
        fontWeight: 'bold',
        lineheight: 'normal',
        maxWidth: 250,
        marginLeft: 30,
    }, 
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(217,217,217,0.5)',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginVertical: 4,
        marginLeft: 30,
        marginRight:30,
    },
    key: {
        fontSize: 15,
        color: colors.black,
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    value: {
        fontSize: 15,
        color: colors.black,
        maxWidth: 280,
    },

    HeadingTitle:{
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 30,
        backgroundColor: colors.green,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 60,
        paddingVertical: 10,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 30,
        marginRight:158,
    },

        Instructionsrow:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(217,217,217,0.5)',
            borderRadius: 8,
            paddingHorizontal: 12,
            marginVertical: 4,
            marginLeft: 30,
            marginRight:30,
            // marginBottom: 130
        },

        instructionRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
            
        },
        index: {
            fontSize: 20,
            color: colors.grey2,
            marginRight: 16,
            marginLeft: 30,
        },
        instructionText: {
            fontSize: 14,
            color: colors.black,
            flex: 1,
            maxWidth: 270,
        },
    })
        

    export default styles;
import { StyleSheet } from "react-native";
import { themes } from "../../util/themes/themes";


export const styles = StyleSheet.create({
   
    categoriesOverviewContainer: {
        flexDirection: "row",
        gap: 10,
        height: 100,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: themes.primary,
        borderWidth: 2,
    },
    categoriesOverviewImageContainer: {
        flex: 1,
        backgroundColor: themes.primary,
        borderRadius: 10
    },
    categoriesOverviewDetailContainer:{
        flex: 3,

    },
    categoriesOverviewTitle: {
        fontSize: 20, 
        fontWeight:"bold", 
        color: "black",
    }
})
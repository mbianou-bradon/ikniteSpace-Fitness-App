import { StyleSheet } from "react-native";
import { themes } from "../../util/themes/themes";


export const styles = StyleSheet.create({
   
    categoriesExerciseContainer: {
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
    categoriesExerciseImageContainer: {
        flex: 1,
        backgroundColor: themes.primary,
        borderRadius: 10
    },
    categoriesExerciseDetailContainer:{
        flex: 3,

    },
    categoriesExerciseTitle: {
        fontSize: 20, 
        fontWeight:"bold", 
        marginBottom: 10,
        color: "black"
    }
})
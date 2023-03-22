import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
   
    categoriesExerciseContainer: {
        flexDirection: "row",
        gap: 10,
        height: 100,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: "#ff4f5b",
        borderWidth: 2,
    },
    categoriesExerciseImageContainer: {
        flex: 1,
        backgroundColor: "#ff4f5b",
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
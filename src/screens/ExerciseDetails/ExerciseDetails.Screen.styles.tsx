import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    exerciseContainer: {
        padding: 10,
        height: "100%",
    },
    exercisePreview: {
        height: 350,
        backgroundColor: "pink",
        borderRadius: 10,
    },
    exerciseDescriptionContainer: {
        marginVertical: 20,
    },
    exerciseTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black"
    },
    exerciseDescription: {
        fontSize: 16,
        marginVertical: 12,
    },
    closeExerciseViewButtonContainer: {
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    closeExerciseButton: {
        backgroundColor: "#27244e",
        height: 50,
        width: "65%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    closeExerciseButtonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
});
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    exerciseContainer: {
        padding: 10,
        height: "100%",
    },
    exercisePreview: {
        height: 350,
        backgroundColor: "#ff4f5b",
        borderRadius: 10,
    },
    exerciseDescriptionContainer: {
        marginTop: 40,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    exerciseTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    exerciseDescription: {
        fontSize: 20,
        marginVertical: 12,
    },
    exerciseDurationContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    exerciseDuration: {
        fontSize: 75,
        color: "#27244e",
    },
    closeExerciseViewButtonContainer: {
        borderTopWidth: 2,
        borderColor: "#ccc",
        paddingTop: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection:"row",
    },
    closeExerciseButton: {
        backgroundColor: "#27244e",
        height: 50,
        width: "45%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    closeExerciseButtonStart:{
        backgroundColor: "green",
        height: 50,
        width: "45%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    closeExerciseButtonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    },
    restTimeContainer: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#27244e"
    },
    restTimeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#ff4f5b"
    },
    restTimeDuration: {
        fontSize: 75,
        color: "#ff4f5b"
    }
});
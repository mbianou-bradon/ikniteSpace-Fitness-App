import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
   
    workoutContainer:{
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff4f5b",
        borderRadius: 30,
    },
    workoutHeader: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "white",
    },
    workoutDetailsContainer: {
        flexDirection: "row",
        gap: 10,
    }
})
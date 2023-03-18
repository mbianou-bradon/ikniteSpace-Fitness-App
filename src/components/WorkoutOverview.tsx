import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function WorkoutOverview(){

    return(
        <TouchableOpacity style={styles.workoutContainer}>
            <View >
                <Text style={styles.workoutHeader}>Home-Workout</Text>
                <View style={styles.workoutDetailsContainer}>
                    <Text>4 exercise</Text>
                    <Text>10 minutes</Text>
                    <Text>Beginner</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
   
    workoutContainer:{
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
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
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CategoriesStackParams } from "../../../App";


export default function WorkoutOverview(){
    const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParams>>()

    return(
        <TouchableOpacity style={styles.workoutContainer} onPress={()=> navigation.navigate("WorkoutCategories")}>
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
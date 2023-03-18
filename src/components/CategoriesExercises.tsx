import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoriesExercises({ navigation }) {

    return (
        <TouchableOpacity style={styles.categoriesExerciseContainer} onPress={()=> navigation.navigate("")}>
            <View style={styles.categoriesExerciseImageContainer}></View>
            <View style={styles.categoriesExerciseDetailContainer}>
                <Text style={{fontSize: 20, fontWeight:"bold"}}> 30 Days Challenge</Text>
                <Text>Regain the shape you loose in 30days</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
   
    categoriesExerciseContainer: {
        flexDirection: "row",
        gap: 10,
        height: 100,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    categoriesExerciseImageContainer: {
        flex: 1,
        backgroundColor: "pink",
        borderRadius: 10
    },
    categoriesExerciseDetailContainer:{
        flex: 3,

    }
})
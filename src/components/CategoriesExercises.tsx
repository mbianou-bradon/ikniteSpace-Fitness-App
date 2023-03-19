import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CategoriesStackParams } from "../../App";

export default function CategoriesExercises() {

    const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParams>>()

    return (
        <TouchableOpacity style={styles.categoriesExerciseContainer} onPress={()=> navigation.navigate('Exercise Details')}>
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
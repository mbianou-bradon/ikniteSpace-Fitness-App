import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CategoriesStackParams } from "../../App";
import { exerciseType } from "../../dataTypes";




export default function CategoriesExercises( item: exerciseType) {

    const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParams>>()
    const image = item.imagePreview

    return (
        <TouchableOpacity style={styles.categoriesExerciseContainer} onPress={()=> navigation.push('Exercise Details', {exerciseTitle: item.title})}>
            <View style={styles.categoriesExerciseImageContainer}>
                {/* <Image source={require(image)} /> */}
            </View>
            <View style={styles.categoriesExerciseDetailContainer}>
                <Text style={styles.categoriesExerciseTitle}>{item.title}</Text>
                <Text>{item.duration} seconds</Text>
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
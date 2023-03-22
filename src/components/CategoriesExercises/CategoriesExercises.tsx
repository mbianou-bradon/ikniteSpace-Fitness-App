import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { CategoriesStackParams } from "../../../App";
import { exerciseType } from "../../../dataTypes";
import { styles } from "./CategoriesExercise.Component.style";




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


import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CategoriesStackParams } from "../../../App";
import { styles } from "./WorkoutOverview.Component.style";


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
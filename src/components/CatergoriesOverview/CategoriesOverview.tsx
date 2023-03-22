import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CategoriesStackParams } from "../../../App";
import { exerciseType } from "../../../dataTypes";

interface item {
    id: any;
    name: string;
    workoutDesc: string;
    exercise: exerciseType[]
}

export default function CategoriesOverview( item:item) {

    const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParams>>()
    const itemId = item.id

    console.warn("Overview Screen", itemId)

    return (
        <TouchableOpacity style={styles.categoriesOverviewContainer} onPress={()=> navigation.push('Categories', { categoryId: itemId})}>
            <View style={styles.categoriesOverviewImageContainer}></View>
            <View style={styles.categoriesOverviewDetailContainer}>
                <Text style={styles.categoriesOverviewTitle}>{item.name}</Text>
                <Text>{item.workoutDesc}</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
   
    categoriesOverviewContainer: {
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
    categoriesOverviewImageContainer: {
        flex: 1,
        backgroundColor: "#ff4f5b",
        borderRadius: 10
    },
    categoriesOverviewDetailContainer:{
        flex: 3,

    },
    categoriesOverviewTitle: {
        fontSize: 20, 
        fontWeight:"bold", 
        color: "black",
    }
})



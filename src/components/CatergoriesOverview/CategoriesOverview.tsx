import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CategoriesStackParams } from "../../../App";
import { exerciseType } from "../../../dataTypes";
import { styles } from "./CategoriesOverview.Component.style";

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





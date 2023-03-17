import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoriesOverview() {

    return (
        <TouchableOpacity style={styles.categoriesOverviewContainer}>
            <View style={styles.categoriesOverviewImageContainer}></View>
            <View style={styles.categoriesOverviewDetailContainer}>
                <Text style={{fontSize: 20, fontWeight:"bold"}}> 30 Days Challenge</Text>
                <Text>Regain the shape you loose in 30days</Text>
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
    },
    categoriesOverviewImageContainer: {
        flex: 1,
        backgroundColor: "pink",
        borderRadius: 10
    },
    categoriesOverviewDetailContainer:{
        flex: 3,

    }
})



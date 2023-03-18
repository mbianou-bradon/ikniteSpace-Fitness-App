import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CategoriesOverview from "../components/CategoriesOverview";

export default function WorkoutCategories(){

    return (
        <View style={styles.categoriesContainer}>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.categoriesSubContainer}>
                <View style={styles.coverImageContainer}>
                    <Image source={require("../assets/icons/round-menu.png")}/>
                </View> 

                <View style={styles.categoriesOptionsHeader}>
                    <Text style={styles.categoriesOptionsHeaderHeading}>Categories</Text>
                    <Text style={styles.categoriesOptionsHeaderMore}>View All</Text>
                </View>

                <CategoriesOverview/>
                <CategoriesOverview/>
                <CategoriesOverview/>
                <CategoriesOverview/>
                <CategoriesOverview/>

                <View style={{height:50}}></View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    categoriesContainer:{
        paddingTop: 5,
        paddingHorizontal: 5,
        // marginBottom: 10,
        
    },
    categoriesSubContainer: {
        backgroundColor: "#cccfff",
        padding: 20,
        borderRadius: 10,
        paddingBottom: 10,
    },
    coverImageContainer: {
        height: 275,
        backgroundColor: "pink",
        borderRadius: 25,
    },
    categoriesOptionsHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        marginVertical: 20,
       
        // backgroundColor: "blue",
    },
    categoriesOptionsHeaderHeading:{
        fontSize: 25,
        fontWeight: "bold",
    },
    categoriesOptionsHeaderMore: {
        color: "pink",
        textDecorationLine: "underline",
    },
    
})



// This is screen two from Home screen
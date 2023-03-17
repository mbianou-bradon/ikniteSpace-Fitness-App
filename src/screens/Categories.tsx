import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CategoriesExercises from "../components/CategoriesExercises";

export default function Categories(){

    return (
        <View style={styles.categoriesMainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.categoriesContainer}>
                <View style={styles.coverImageContainer}>
                    <Image source={require("../assets/icons/round-menu.png")}/>
                </View> 
                <View style={styles.categoriesSubContainer}>
                    <View style={styles.categoriesOptionsHeader}>
                        <Text style={styles.categoriesOptionsHeaderHeading}>Categories</Text>
                        <Text style={styles.categoriesOptionsHeaderMore}>View All</Text>
                    </View>

                    <CategoriesExercises/>
                    <CategoriesExercises/>
                    <CategoriesExercises/>
                    <CategoriesExercises/>
                    <CategoriesExercises/>
                    <CategoriesExercises/>
                    <CategoriesExercises/>
                    

                    <View style={{height:50}}></View>
                </View>
                
                
            </ScrollView>

            <View style={styles.startExerciseButtonContainer}>
                <Pressable style={styles.startExerciseButton}>
                    <View>
                        <Text style={styles.startExerciseButtonText}>Start</Text>
                    </View>
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    categoriesMainContainer:{
        paddingTop: 5,
        paddingHorizontal: 5,
        height: "100%",
        
    },
    categoriesContainer: {
        backgroundColor: "#cccfff",
        // padding: 20,
        borderRadius: 10,
        paddingBottom: 10,
    },
    categoriesSubContainer: {
        backgroundColor: "#cccfff",
        paddingHorizontal: 20,
        paddingBottm: 20,
        paddingTop: 10,
        borderRadius: 10,
        paddingBottom: 10,
    },
    coverImageContainer: {
        height: 150,
        backgroundColor: "pink",
        borderRadius: 10,
    },
    categoriesOptionsHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 20,
        marginBottom: 15,

    },
    categoriesOptionsHeaderHeading:{
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "red"
    },
    categoriesOptionsHeaderMore: {
        color: "pink",
        textDecorationLine: "underline",
    },
    startExerciseButtonContainer: {
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    startExerciseButton: {
        backgroundColor: "blue",
        height: 50,
        width: "65%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    startExerciseButtonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
    
})
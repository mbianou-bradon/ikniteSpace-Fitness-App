import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WorkoutOverview from "../components/WorkoutOverview";

export default function Home() {

    return (
        <View>
            <View style={styles.headerStyles}>
                <Text style={styles.headerText}>IkniteSpace Workout</Text>

                <Pressable>
                    <Image source={require("../assets/icons/round-menu.png")}/>
                </Pressable>
            </View>


            <View style={{paddingHorizontal:20, paddingVertical:40}}>
                <WorkoutOverview />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerStyles: {
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#cf3",
        paddingTop: 14,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
})
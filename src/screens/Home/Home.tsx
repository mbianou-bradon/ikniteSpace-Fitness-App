import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import WorkoutOverview from "../../components/WorkoutOverview/WorkoutOverview";
import { styles } from "./Home.Screen.styles";

export default function Home() {

    return (
        <View>
            <View style={styles.headerStyles}>
                <Text style={styles.headerText}>IkniteSpace Workout</Text>

                <Pressable>
                    <Image source={require("../../assets/icons/round-menu.png")}/>
                </Pressable>
            </View>


            <View style={{paddingHorizontal:20, paddingVertical:40}}>
                <WorkoutOverview />
            </View>
        </View>
    )
}

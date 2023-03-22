import RNSystemSounds from "@dashdoc/react-native-system-sounds";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { current } from "@reduxjs/toolkit";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CategoriesStackParams } from "../../../App";
import { exerciseType } from "../../../dataTypes";


export default function Exercise({ route }: any){
    const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParams>>()

    const { exercisePlaylist } = route.params;
    // console.warn(exercisePlaylist)
    
    const [playlist, setPlaylist] = React.useState<exerciseType[]>(exercisePlaylist)
    const [currentExercise, setCurrentExercise] = React.useState<exerciseType>(exercisePlaylist[0]);
    const [duration, setDuration] = React.useState<number>(currentExercise.duration);
    const [restTime, setRestTime] = React.useState<number>(0);
 
    let index: number = 1;
    const handleNextExercise = () => {
        if (duration === 0 && index < exercisePlaylist.length){
            setCurrentExercise(exercisePlaylist[index])
            setDuration(duration);

        }
        index++;
    }



    const handleStart = () =>{
        const decDurationId = setInterval(()=>{

            setDuration( duration => {
            if(duration === 0){
                clearInterval(decDurationId);
                handleNextExercise;
                return 0;
            }
            if(duration <= 5){
                RNSystemSounds.beep(RNSystemSounds.Beeps.Negative);
            }
            if(duration > 5){
                RNSystemSounds.beep();
            }
            return duration - 1;
        })
        },1000);
        // setCurrentExercise(exercisePlaylist[1])
        
    }
    

    return(
        <View style={styles.exerciseContainer}>
            <View>
                <View style={styles.exercisePreview}>

                </View>                 
            </View>
            <View>
                <View style={styles.exerciseDescriptionContainer}>
                    <Text style={styles.exerciseTitle}>{currentExercise.title}</Text>
        
                </View>
                <View style={styles.exerciseDurationContainer}>
                    <Text style={styles.exerciseDuration}>{duration}</Text>
        
                </View>

            </View>
            <View>

                <View style={styles.closeExerciseViewButtonContainer}>
                    <Pressable style={styles.closeExerciseButton} onPress={()=> navigation.goBack()}>
                        <View>
                            <Text style={styles.closeExerciseButtonText}>Close</Text>
                        </View>
                    </Pressable>

                    <Pressable style={styles.closeExerciseButtonStart}  onPress={handleStart}>
                        <View>
                            <Text style={styles.closeExerciseButtonText}>Begin</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    exerciseContainer: {
        padding: 10,
        height: "100%",
    },
    exercisePreview: {
        height: 350,
        backgroundColor: "#ff4f5b",
        borderRadius: 10,
    },
    exerciseDescriptionContainer: {
        marginTop: 40,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    exerciseTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    exerciseDescription: {
        fontSize: 20,
        marginVertical: 12,
    },
    exerciseDurationContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    exerciseDuration: {
        fontSize: 75,
        color: "#27244e",
    },
    closeExerciseViewButtonContainer: {
        borderTopWidth: 2,
        borderColor: "#ccc",
        paddingTop: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection:"row",
    },
    closeExerciseButton: {
        backgroundColor: "#27244e",
        height: 50,
        width: "45%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    closeExerciseButtonStart:{
        backgroundColor: "green",
        height: 50,
        width: "45%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    closeExerciseButtonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
});
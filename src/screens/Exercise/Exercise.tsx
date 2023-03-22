import RNSystemSounds from "@dashdoc/react-native-system-sounds";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { current } from "@reduxjs/toolkit";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CategoriesStackParams } from "../../../App";
import { exerciseType } from "../../../dataTypes";
import { styles } from "./Exercise.Screen.styles";


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

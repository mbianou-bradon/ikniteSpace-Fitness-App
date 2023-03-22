import RNSystemSounds from "@dashdoc/react-native-system-sounds";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CategoriesStackParams } from "../../../App";
import { exerciseType } from "../../../dataTypes";
import { styles } from "./Exercise.Screen.styles";


export default function Exercise({ route }: any){
    const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParams>>()

    const { exercisePlaylist } = route.params;
    
    const playlist: exerciseType[] = exercisePlaylist;
    const [currentExercise, setCurrentExercise] = React.useState<exerciseType>(exercisePlaylist[0]);
    const [duration, setDuration] = React.useState<number>(currentExercise.duration);
    const [restTime, setRestTime] = React.useState<number>(0);
    const [index, setIndex] = React.useState<number>(0);
 
    
    const handleNextExercise = (prevIndex: number) => {
        const playlistLength = playlist.length; 
        if(prevIndex >= playlistLength -1){
            setCurrentExercise(exercisePlaylist[0]);
            return 0;
        }
        else {
            setCurrentExercise(exercisePlaylist[prevIndex + 1]);
            return prevIndex + 1;
        }
    }


    const handleStart = () =>{
        setDuration(currentExercise.duration)
        const decDurationId = setInterval(()=>{
            setDuration( duration => {
            if(duration === 0){
                clearInterval(decDurationId);
                setIndex(handleNextExercise(index));
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
    useEffect(() =>{
        if(index){
            handleStart();
        }},[index]
    )
    

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

import RNSystemSounds from '@dashdoc/react-native-system-sounds';
import Tts from 'react-native-tts';
import IdleTimerManager from 'react-native-idle-timer';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {current} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {CategoriesStackParams} from '../../../App';
import {exerciseType} from '../../../dataTypes';
import {styles} from './Exercise.Screen.styles';

export default function Exercise({route}: any) {
  const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParams>>();

  const {exercisePlaylist} = route.params;

  

  const playlist: exerciseType[] = exercisePlaylist;
  const [currentExercise, setCurrentExercise] = React.useState<exerciseType>(
    exercisePlaylist[0],
  );
  const [duration, setDuration] = React.useState<number>(
    currentExercise.duration,
  );
  const [restTime, setRestTime] = React.useState<number>(0);
  const [index, setIndex] = React.useState<number>(0);
  const [isResting, setIsResting] = React.useState<boolean>(false);
  let nextExercise: exerciseType = playlist[index + 1];



  const handleNextExercise = (prevIndex: number) => {
    const playlistLength = playlist.length;
    if (prevIndex >= playlistLength - 1) {
      // setCurrentExercise(exercisePlaylist[0]);
      navigation.goBack();
      return 0;
    } else {
      setCurrentExercise(exercisePlaylist[prevIndex + 1]);
      setDuration(currentExercise.duration);
      return prevIndex + 1;
    }
  };
  const handleNextExerciseFast = () => {
    setIndex(handleNextExercise(index));
    setIsResting(false);
  }

  const handleStart = () => {
    IdleTimerManager.setIdleTimerDisabled(true);
    console.log("From exercise:", currentExercise.title, duration)
    
    Tts.speak(currentExercise.title)
    setTimeout(() => {
      currentExercise.desc.forEach( desc => {
        Tts.speak(desc)
      });
    }, 4000); 

    
    const decDurationId = setInterval(() => {
      setDuration(duration => {
        if (duration === 0) {
          clearInterval(decDurationId);
          setIsResting(true);
          return 0;
        }
        if (duration <= 6) {
          RNSystemSounds.beep(RNSystemSounds.Beeps.Negative);
        }
        if (duration > 5) {
          RNSystemSounds.beep();          
        }
        return duration - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    if (index) {
      handleStart();
    }
  }, [index]);

  const handleRest = () => {
    setRestTime(currentExercise.restTime);
    const restDurationId = setInterval(() => {
      setRestTime(restduration => {
        if (restduration === 0) {
          clearInterval(restDurationId);
          setIndex(handleNextExercise(index));
          setIsResting(false);
          return 0;
        }
        return restduration - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    if (isResting) {
      handleRest();
    }
  }, [isResting]);

  if (!isResting) {
    return (
      <View style={styles.exerciseContainer}>
        <View style={styles.exerciseSubBigContainer}>
          <View>
            <View style={styles.exercisePreview}></View>
          </View>
          <View>
            <View style={styles.exerciseDescriptionContainer}>
              <Text
                style={styles.exerciseTitle}
                onPress={() =>
                  navigation.push('Exercise Details', {exerciseTitle: currentExercise.title})
                }>
                {currentExercise.title}
              </Text>
            </View>
            <View style={styles.exerciseDurationContainer}>
              <Text style={styles.exerciseDuration}>
                {duration}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.exerciseSubSmallContainer}>
          <View style={styles.closeExerciseViewButtonContainer}>
            <Pressable
              style={styles.closeExerciseButton}
              onPress={() => navigation.goBack()}>
              <View>
                <Text style={styles.closeExerciseButtonText}>Close</Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.closeExerciseButtonStart}
              onPress={handleStart}>
              <View>
                <Text style={styles.closeExerciseButtonText}>Begin</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    );
  } else if (isResting && index + 1 < playlist.length){
    return (
      <View style={styles.restTimeContainer}>
        <View style={{height:"60%", justifyContent:"center", alignItems:"center"}}>
            <View style={styles.exerciseDescription}>
                <Text style={styles.restTimeText}>Rest Time</Text>
            </View>

            <View style={styles.exerciseDescription}>
                <Text style={styles.restTimeDuration}>{restTime}</Text>
            </View>
            <TouchableOpacity style={styles.skipBtnContainer} onPress={handleNextExerciseFast}>
                <Text style={styles.skipBtnText}>Skip</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.upnextContainer}>
            <View style={styles.upnextTextContainer}>
                <Text style={styles.upnextText}>Up Next</Text>
                <Text style={{color: "white"}}>{index + 2 } / {playlist.length}</Text>
            </View>
            <View style={styles.upnextExercise}>
                <View>
                    <Text style={styles.upnextExerciseTitle}>{nextExercise.title}</Text>
                </View>
                
                <Text>00:{nextExercise.duration}</Text>
            </View>
            <View>
                {/* <Image source={require()}/> */}
            </View>
        </View>
      </View>
    );
  }
}

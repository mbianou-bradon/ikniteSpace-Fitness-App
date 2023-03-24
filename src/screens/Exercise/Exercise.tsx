import RNSystemSounds from '@dashdoc/react-native-system-sounds';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {current} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {CategoriesStackParams} from '../../../App';
import {exerciseType} from '../../../dataTypes';
import {styles} from './Exercise.Screen.styles';

export default function Exercise({route}: any) {
  const navigation =
    useNavigation<NativeStackNavigationProp<CategoriesStackParams>>();

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

  const handleNextExercise = (prevIndex: number) => {
    const playlistLength = playlist.length;
    if (prevIndex >= playlistLength - 1) {
      setCurrentExercise(exercisePlaylist[0]);
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
    const decDurationId = setInterval(() => {
      setDuration(duration => {
        if (duration === 0) {
          clearInterval(decDurationId);
          setIsResting(true);
          return 0;
        }
        if (duration <= 5) {
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
              {isResting ? 'Currently Resting' : currentExercise.title}
            </Text>
          </View>
          <View style={styles.exerciseDurationContainer}>
            <Text style={styles.exerciseDuration}>
              {isResting ? restTime : duration}
            </Text>
          </View>
        </View>
        <View>
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
  } else {/* if (isResting && index + 1 < playlist.length */}{
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
                <Text style={{color: "white"}}>{index + 1 } / {playlist.length}</Text>
            </View>
            <View style={styles.upnextExercise}>
                <View>
                    <Text style={styles.upnextExerciseTitle}>{playlist[index + 1].title}</Text>
                </View>
                
                <Text>00:{playlist[index + 1].duration}</Text>
            </View>
            <View>
                {/* <Image source={require()}/> */}
            </View>
        </View>
      </View>
    );
  }
}

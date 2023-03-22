import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {CategoriesStackParams} from '../../../App';
import CategoriesExercises from '../../components/CategoriesExercises/CategoriesExercises';
import {workoutCategoriesData} from '../../data/workoutCategoriesData';
import { styles } from './Categories.Screen.styles';



const Categories = ({route}: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<CategoriesStackParams>>();
  //   const exerciseData = useAppSelector(state => state.exercisereducer);

  const {categoryId} = route.params;

  const category = workoutCategoriesData.filter(
    category => category.id === categoryId,
  )[0];

  const data = category.exercise;


  return (
    <View style={styles.categoriesMainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.categoriesContainer}>
        <View style={styles.coverImageContainer}>
          <Image source={require('../../assets/icons/round-menu.png')} />
        </View>

        <View style={styles.categoriesSubContainer}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <CategoriesExercises
                title={item.title}
                imagePreview={item.imagePreview}
                category={item.category}
                desc={item.desc}
                focusArea={item.focusArea}
                restTime={item.restTime}
                duration={item.duration}
              />

            )}
          />

          <View style={{height: 50}}></View>
        </View>
      </ScrollView>

      <View style={styles.startExerciseButtonContainer}>
        <Pressable
          style={styles.startExerciseButton}
          onPress={() => (
            navigation.navigate('Exercise', { exercisePlaylist: category.exercise}))}>
          <View>
            <Text style={styles.startExerciseButtonText}>Start</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};


export default Categories;



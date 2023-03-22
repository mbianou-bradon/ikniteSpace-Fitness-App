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
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CategoriesStackParams} from '../../../App';
import CategoriesExercises from '../../components/CategoriesExercises';
import {workoutCategoriesData} from '../../data/workoutCategoriesData';



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
          <Image source={require('../assets/icons/round-menu.png')} />
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

const styles = StyleSheet.create({
  categoriesMainContainer: {
    paddingTop: 5,
    paddingHorizontal: 5,
    height: '100%',
  },
  categoriesContainer: {
    // backgroundColor: '#cccfff',
    backgroundColor: 'white',
    // padding: 20,
    borderRadius: 10,
    paddingBottom: 10,
  },
  categoriesSubContainer: {
    // backgroundColor: '#cccfff',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingBottm: 20,
    paddingTop: 10,
    borderRadius: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  coverImageContainer: {
    height: 150,
    backgroundColor: '#ff4f5b',
    borderRadius: 10,
  },
  categoriesOptionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 20,
    marginBottom: 15,
  },
  categoriesOptionsHeaderHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  categoriesOptionsHeaderMore: {
    color: '#ff4f5b',
    textDecorationLine: 'underline',
  },
  startExerciseButtonContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startExerciseButton: {
    backgroundColor: '#27244e',
    height: 50,
    width: '65%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startExerciseButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Categories;



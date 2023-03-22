import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import CategoriesOverview from '../../components/CatergoriesOverview/CategoriesOverview';
import {workoutCategoriesData} from '../../data/workoutCategoriesData';
import {useAppSelector} from '../../redux/store/hooks';
import { styles } from './WorkoutCategories.Screen.styles';

export default function WorkoutCategories() {
  // const workoutCategories = useAppSelector(state => state.workoutCategoriesreducer.todos)

  return (
    <View style={styles.categoriesContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.categoriesSubContainer}>
        <View style={styles.coverImageContainer}>
          <Image source={require('../assets/icons/round-menu.png')} />
        </View>

        <View style={styles.categoriesOptionsHeader}>
          <Text style={styles.categoriesOptionsHeaderHeading}>Categories</Text>
          <Text style={styles.categoriesOptionsHeaderMore}>View All</Text>
        </View>

        {/* <CategoriesOverview name="30 Days Challenge" workoutDesc="Regain the shape you loose in 30days" exercise={[]}/>
                <CategoriesOverview name="15 Days Challenge" workoutDesc="Regain the shape you loose in 15days" exercise={[]}/>
                <CategoriesOverview name="10 Days Challenge" workoutDesc="Regain the shape you loose in 30days" exercise={[]} />
                <CategoriesOverview name="Mountain Race Preparation" workoutDesc="Get ready to ascent Mountains" exercise={[]} />
                <CategoriesOverview name="Body Building" workoutDesc="Get that look your Desire so much" exercise={[]} /> */}
        <FlatList
          data={workoutCategoriesData}
          keyExtractor={({ id }, index) => id} 
          renderItem={({item}) => (
            <CategoriesOverview
              name={item.name}
              workoutDesc={item.workoutDesc}
              exercise={item.exercise}
              id = {item.id}
            />
          )}
        />

        <View style={{height: 50}}></View>
      </ScrollView>
    </View>
  );
}

// This is screen two from Home screen

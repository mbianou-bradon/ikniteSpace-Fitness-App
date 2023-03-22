import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CategoriesOverview from '../../components/CategoriesOverview';
import {workoutCategoriesData} from '../../data/workoutCategoriesData';
import {useAppSelector} from '../../redux/store/hooks';

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

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingTop: 5,
    paddingHorizontal: 5,
    // marginBottom: 10,
  },
  categoriesSubContainer: {
    // backgroundColor: '#cccfff',
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    paddingBottom: 10,
  },
  coverImageContainer: {
    height: 275,
    backgroundColor: '#ff4f5b',
    borderRadius: 25,
  },
  categoriesOptionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginVertical: 20,

    // backgroundColor: "blue",
  },
  categoriesOptionsHeaderHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "black"
  },
  categoriesOptionsHeaderMore: {
    color: '#ff4f5b',
    textDecorationLine: 'underline',
  },
});

// This is screen two from Home screen

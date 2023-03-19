/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';

import WorkoutCategories from "./src/screens/WorkoutCategories"
import Categories from './src/screens/Categories';
import Exercise from './src/screens/Exercise';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExerciseDetails from './src/screens/ExerciseDetails';

// Different Stack Params Definitions
export type RootStackParams = {
  Training: CategoriesStackParams;
  Discover: any;
  Report: any;
  Settings: any;
}

export type CategoriesStackParams = {
  Categories: any;
  Exercise: any;
  "Exercise Details": any;
}

// Different Stacks
const CategoriesStack = createNativeStackNavigator<CategoriesStackParams>()

const RootStack = createBottomTabNavigator<RootStackParams>()

const  CategoriesStackRoute = (): JSX.Element => {

  return (
    <CategoriesStack.Navigator initialRouteName='Categories'>
      <CategoriesStack.Screen name={"Categories"} component={Categories} />
      <CategoriesStack.Screen name={"Exercise"} component={Exercise}/>
      <CategoriesStack.Screen name={"Exercise Details"} component={ExerciseDetails} />
    </CategoriesStack.Navigator>
  )
}


function App(): JSX.Element {
  

  return (
    <NavigationContainer>
        <StatusBar />
        <RootStack.Navigator initialRouteName="Training">
          <RootStack.Screen name="Training" component={WorkoutCategories} />
          <RootStack.Screen name="Discover" component={CategoriesStackRoute} />
          <RootStack.Screen name="Report" component={Exercise} />
          <RootStack.Screen name="Settings" component={Exercise} />
        </RootStack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

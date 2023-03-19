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

export type StackParams = {
  Categories_Overview: any;
  Categories: any;
  Exercise: any;
}


const CategoriesStack = createNativeStackNavigator<StackParams>()

function App(): JSX.Element {
  

  return (
    <NavigationContainer>
        <StatusBar />
        <CategoriesStack.Navigator initialRouteName="Categories_Overview">
          <CategoriesStack.Screen name="Categories_Overview" component={WorkoutCategories} />
          <CategoriesStack.Screen name="Categories" component={Categories} />
          <CategoriesStack.Screen name="Exercise" component={Exercise} />
        </CategoriesStack.Navigator>
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

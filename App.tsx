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
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import WorkoutCategories from "./src/screens/WorkoutCategories"
import Categories from './src/screens/Categories';
import Exercise from './src/screens/Exercise';


const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  

  return (
    <NavigationContainer>
      <SafeAreaView >
        <StatusBar />
        <Stack.Navigator initialRouteName="Categories_Overview">
          <Stack.Screen name="Categories_Overview" component={WorkoutCategories} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Exercise" component={Exercise} />
        </Stack.Navigator>
      </SafeAreaView>
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

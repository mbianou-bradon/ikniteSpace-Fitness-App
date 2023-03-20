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
import Report from './src/screens/Report';
import Settings from './src/screens/Settings';
import Discover from './src/screens/Discover';
import Home from './src/screens/Home';

// Different Stack Params Definitions
export type RootStackParams = {
  Training: CategoriesStackParams;
  Discover: undefined;
  Report: undefined;
  Settings: undefined;
}

export type CategoriesStackParams = {
  Home: undefined;
  WorkoutCategories: undefined;
  Categories: undefined;
  Exercise: undefined;
  "Exercise Details": undefined;
}

// Different Stacks
const CategoriesStack = createNativeStackNavigator<CategoriesStackParams>()

const RootStack = createBottomTabNavigator<RootStackParams>()

const  CategoriesStackRoute = (): JSX.Element => {

  return (
      <RootStack.Navigator initialRouteName="Training" screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Training" component={Home} />
          <RootStack.Screen name="Discover" component={Discover} />
          <RootStack.Screen name="Report" component={Report} />
          <RootStack.Screen name="Settings" component={Settings} />
      </RootStack.Navigator>

  )
}


function App(): JSX.Element {
  

  return (
    <NavigationContainer>
        <StatusBar />
        <CategoriesStack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <CategoriesStack.Screen name={"Home"} component={CategoriesStackRoute}/>
          <CategoriesStack.Screen name={"WorkoutCategories"} component={WorkoutCategories} />
          <CategoriesStack.Screen name={"Categories"} component={Categories} />
          <CategoriesStack.Screen name={"Exercise"} component={Exercise}/>
          <CategoriesStack.Screen name={"Exercise Details"} component={ExerciseDetails} />
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

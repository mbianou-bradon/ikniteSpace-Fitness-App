import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import  Ionic  from "react-native-vector-icons/Ionicons"
import SplashScreen from 'react-native-splash-screen';
import WorkoutCategories from "./src/screens/WorkoutCategories/WorkoutCategories"
import Categories from './src/screens/Categories/Categories';
import Exercise from './src/screens/Exercise/Exercise';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExerciseDetails from './src/screens/ExerciseDetails/ExerciseDetails';
import Report from './src/screens/Report/Report';
import Settings from './src/screens/Settings/Settings';
import Discover from './src/screens/Discover/Discover';
import Home from './src/screens/Home/Home';
import { themes } from './src/util/themes/themes';

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
      <RootStack.Navigator initialRouteName="Training" ta screenOptions={({route})=> ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName:string;
          if(route.name === "Training"){
            iconName = focused ? "timer" : "timer-outline";
          } else if(route.name === "Discover"){
            iconName = focused ? "compass" : "compass-outline";
          } else if(route.name === "Report"){
            iconName = focused ? "stats-chart" : "stats-chart-outline";
          } else if(route.name === "Settings"){
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionic name={iconName} color={color} size={size}/>
        },
        tabBarActiveTintColor: themes.primary,
        tabBarInactiveTintColor: themes.seconday,
        
      })}
      
      >
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


export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './src/Screens/HomeScreen'
import QuestionsScreen from './src/Screens/QuestionsScreen'

const stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home" headerMode = "none">
          <stack.Screen  name ="Home" component={HomeScreen}/>
          <stack.Screen  name = "Perguntas" component={QuestionsScreen}/>
        </stack.Navigator>
      </NavigationContainer>
  );
}
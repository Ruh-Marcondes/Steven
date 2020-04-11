import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './src/Screens/HomeScreen'
import QuestionsScreen from './src/Screens/QuestionsScreen'
import SettingsScreen from './src/Screens/SettingsScreen'
const stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home" headerMode = "none">
          <stack.Screen  name ="Home" component={HomeScreen}/>
          <stack.Screen  name = "Perguntas" component={QuestionsScreen}/>
          <stack.Screen  name = "Configurações" component={SettingsScreen}/>
        </stack.Navigator>
      </NavigationContainer>
  );
}
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import HomeScreen from './src/Screens/HomeScreen'
import QuestionsScreen from './src/Screens/QuestionsScreen'
import SettingsScreen from './src/Screens/SettingsScreen'
import AboutScreen from './src/Screens/AboutScreen'

const stack = createStackNavigator();
export default class App extends React.Component{
  

  render(){
  return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home" headerMode = "none">
          <stack.Screen  name ="Home" component={HomeScreen}/>
          <stack.Screen  name = "Perguntas" component={QuestionsScreen}/>
          <stack.Screen  name = "Configurações" component={SettingsScreen}/>
          <stack.Screen  name = "Sobre" component={AboutScreen}/>
        </stack.Navigator>
      </NavigationContainer>
  );
};
}
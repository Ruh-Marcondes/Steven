import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './src/Screens/HomeScreen'

const stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen  name ="Home" component={HomeScreen}/>
        </stack.Navigator>
      </NavigationContainer>
  );
}
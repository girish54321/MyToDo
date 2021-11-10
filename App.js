/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { DescriptionScreen } from './screens/DescriptionScreen';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#6200ee"
        barStyle="light-content"
      />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="LIST" component={HomeScreen} />
        <Stack.Screen name="ADD" component={DescriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

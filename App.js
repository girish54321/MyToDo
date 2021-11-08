/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { DescriptionScreen } from './screens/DescriptionScreen';
import { HomeStyle } from './screens/HomeStyle';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'lightgreen',
          },
        }}>
        <Stack.Screen name="LIST" component={HomeScreen} />
        <Stack.Screen name="ADD" component={DescriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

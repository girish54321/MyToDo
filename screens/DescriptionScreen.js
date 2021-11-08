import 'react-native-gesture-handler';
import React from 'react';

import {View, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

export function DescriptionScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextInput placeholder="add title"></TextInput>
      <TextInput placeholder="description"></TextInput>

      <TouchableOpacity>
        <Text
          style={{
            backgroundColor: 'lightgreen',
            width: 200,
            fontSize: 30,
            marginTop: 25,
            color: 'black',
            textAlign: 'center',
          }}
          onPress={() => {
            console.warn('pressed');
          }}>
          ADD
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';

export function DescriptionScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="Add" subtitle="Add New Todo" />
      </Appbar.Header>
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

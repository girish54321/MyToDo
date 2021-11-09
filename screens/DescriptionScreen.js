import React, { useState } from 'react';
import { View } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

export function DescriptionScreen({ navigation, route }) {
  const { addNewToTo } = route.params;
  const [newTask, setnewTask] = useState({
    completed: false,
    description: "",
    id: 2,
    title: "",
    userid: 1
  });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="Add" subtitle="Add New Todo" />
      </Appbar.Header>
      <View style={{ padding: 16 }}>
        <TextInput placeholder="add title"
          value={newTask.title}
          onChangeText={(text) => {
            setnewTask({
              ...newTask,
              title: text
            })
          }} />
        <View style={{ paddingVertical: 14 }} />
        <TextInput placeholder="description"
          value={newTask.description}
          onChangeText={(text) => {
            setnewTask({
              ...newTask,
              description: text
            })
          }} />
        <View style={{ paddingVertical: 14 }} />
        <Button mode="contained" onPress={() => {
          addNewToTo(newTask)
        }}>
          Press me
        </Button>
      </View>
    </View>
  );
}

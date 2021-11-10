import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

export function DescriptionScreen({ navigation, route }) {
  const item = route && route.params && route.params.item && route.params.item;
  const [newTask, setnewTask] = useState({
    completed: false,
    description: "",
    id: 2,
    title: "",
    userid: 1
  });

  useEffect(() => {
    if (item) {
      setnewTask(item)
    }
  }, [])

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
        <TextInput
          placeholder="add title"
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
          const { addNewToTo } = route.params.addNewToTo;
          if (addNewToTo) {
            addNewToTo(newTask)
          } else {
            //TODO:Call function
          }
        }}>
          Press me
        </Button>
      </View>
    </View>
  );
}

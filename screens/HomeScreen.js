import 'react-native-gesture-handler';
import React from 'react';

import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { HomeStyle } from './HomeStyle';
import { List } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import { FAB } from 'react-native-paper';
const data = require('./todo.json');
export function HomeScreen({ navigation }) {
  const [Task, setTask] = useState(null);
  const [reload, setreload] = useState(true)

  useEffect(() => {
    setTask(data);
  }, []);

  function Item({
    item,
    index
  }) {
    return (
      <List.Item
        title={item.title}
        description={item.description}
        left={() => (
          <Checkbox
            status={item.completed ? 'checked' : 'unchecked'}
            onPress={() => {
              console.log('asddf');
              let taskArray = Task;
              // taskArray[index].completed = !completed;
              let updatedObj = { ...item, completed: !item.completed };
              taskArray[index] = updatedObj;
              setTask(taskArray);
              console.log(taskArray);
              setreload(!reload)
            }}
          />
        )}
      />
    );
  }

  return (
    <View style={HomeStyle.container}>
      <FlatList
        style={{
          flex: 1,
        }}
        data={Task ? Task : []}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <Item
            item={item}
            index={index}

          />
        )}
      />
      <FAB
        style={HomeStyle.fab}
        small
        icon="plus"
        onPress={() => {
          navigation.navigate('ADD');
        }}
      />
    </View>
  );
}

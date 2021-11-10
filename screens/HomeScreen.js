import React from 'react';
import { View, FlatList } from 'react-native';
import { useState } from 'react';
import { HomeStyle } from './HomeStyle';
import { FAB, Appbar, List, Checkbox, Divider } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  const [Task, setTask] = useState([]);
  const [reload, setreload] = useState(true)

  function addNewToTo(item) {
    if (Task && Task.length) {
      setTask([...Task, item])
      setreload(!reload)
      console.log("Hello");
    } else {
      setTask([item])
      setreload(!reload)
    }
  }

  function updateTask(item, index) {
    console.log("item", item);
    console.log("index", index);
    let taskArray = Task;
    let updatedObj = item;
    taskArray[index] = updatedObj;
    setTask(taskArray);
    setreload(!reload)
  }

  function Item({
    item,
    index
  }) {
    return (
      <View>
        <List.Item
          onPress={() => {
            navigation.navigate('ADD', {
              item: item,
              index: index,
              updateTask: updateTask
            });
          }}
          title={item.title}
          description={item.description}
          left={() => (
            <Checkbox
              color={"#6200ee"}
              status={item.completed ? 'checked' : 'unchecked'}
              onPress={() => {
                let taskArray = Task;
                let updatedObj = { ...item, completed: !item.completed };
                taskArray[index] = updatedObj;
                setTask(taskArray);
                setreload(!reload)
              }}
            />
          )}
        />
        <Divider />
      </View>
    );
  }

  function fabButton() {
    return (
      <FAB
        style={HomeStyle.fab}
        color={"#6200ee"}
        icon="plus"
        onPress={() => {
          navigation.navigate('ADD', {
            addNewToTo: addNewToTo,
          });
        }}
      />
    )
  }

  return (
    <View style={HomeStyle.container}>
      <Appbar.Header>
        <Appbar.Content title="MyTodo" subtitle="Todo List" />
      </Appbar.Header>
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
      {fabButton()}
    </View>
  );
}

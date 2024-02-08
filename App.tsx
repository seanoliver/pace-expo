import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";

export default function App() {
  // Sample tasks
  const [tasks, setTasks] = useState([
    { id: "1", text: "Task 1" },
    { id: "2", text: "Task 2" },
    { id: "3", text: "Task 3" },
    // Add more tasks here
  ]);

  // Render Task Item
  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.taskListContainer}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  taskListContainer: {
    paddingTop: 20,
  },
  taskItem: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  taskText: {
    fontSize: 16,
  },
});

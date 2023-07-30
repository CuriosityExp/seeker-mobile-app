import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ToDoScreen({ navigation }) {
  const [todoItem, setTodoItem] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete homework", completed: false },
    { id: 2, text: "Go for a walk", completed: false },
    { id: 3, text: "Buy groceries", completed: false },
    { id: 4, text: "Call a friend", completed: false },
    { id: 5, text: "Read a book", completed: false },
    { id: 6, text: "Complete homework", completed: false },
    { id: 7, text: "Go for a walk", completed: false },
    { id: 8, text: "Buy groceries", completed: false },
    { id: 9, text: "Call a friend", completed: false },
    { id: 10, text: "Read a book", completed: false },
    { id: 11, text: "Complete homework", completed: false },
    { id: 12, text: "Go for a walk", completed: false },
    { id: 13, text: "Buy groceries", completed: false },
    { id: 14, text: "Call a friend", completed: false },
    { id: 15, text: "Read a book", completed: false },
  ]);

  const handleAddTodo = () => {
    if (todoItem.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: todoItem, completed: false }]);
    setTodoItem("");
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleToggleTodo(item.id)}>
      <View style={[styles.todoItem, item.completed && styles.completedTodo]}>
        <Text style={styles.todoText}>{item.text}</Text>
        {item.completed ? (
          <FontAwesome name="check-square-o" size={24} color="green" />
        ) : (
          <FontAwesome name="square-o" size={24} color="black" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a task..."
          value={todoItem}
          onChangeText={(text) => setTodoItem(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginBottom: 80,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    borderRadius: 35,
  },
  addButton: {
    backgroundColor: "#ffde59",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  addButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  list: {
    flex: 1,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 18,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 35,
  },
  completedTodo: {
    backgroundColor: "#e1ffe1",
  },
  todoText: {
    flex: 1,
  },
});

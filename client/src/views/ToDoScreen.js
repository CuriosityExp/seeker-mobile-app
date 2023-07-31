import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ToDoScreen({ navigation, route }) {
  const { data } = route.params;
  console.log(data);

  const [postedTodos, setPostedTodos] = useState(false);
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

  const handlePostTodos = () => {
    setPostedTodos(!postedTodos);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleToggleTodo(item.id)}>
      <View style={[styles.todoItem, item.completed && styles.completedTodo]}>
        {item.completed ? (
          <FontAwesome name="check-square-o" size={24} color="green" />
        ) : (
          <FontAwesome name="square-o" size={24} color="black" />
        )}
        <Text style={styles.todoText}>{item.text}</Text>
        <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
          <FontAwesome name="trash-o" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.header}>TODO List</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.balance}>Balance: 5</Text>
          <FontAwesome name="star" size={24} color="green" />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.jobTitle}>{data.jobTitle}</Text>
        <Text style={styles.companyName}>{data.companyName}</Text>
        <Text style={styles.jobDescription}>{data.companyLocation}</Text>
      </View>
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a task..."
          value={todoItem}
          onChangeText={(text) => setTodoItem(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.listContainer}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
      <TouchableOpacity
        style={styles.postButton}
        onPress={handlePostTodos}
        disabled={postedTodos}
      >
        <Text style={styles.postButtonText}>
          {postedTodos ? "Posted" : "Post Todos"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  postButton: {
    backgroundColor: "#ffde59",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginTop: 20,
  },
  postButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
    // marginBottom: 80,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  balance: {
    fontSize: 18,
    color: "green",
    marginBottom: 20,
    marginRight: 8,
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
    marginLeft: 10,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  companyName: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    navigation.navigate("Root", { screen: "Home" });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View className="items-center">
            <Image
              source={require("../../assets/seeker_black.png")}
              style={{ height: 300, width: 300 }}
            />
          </View>
          <View className="">
            <TextInput
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              secureTextEntry={true}
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-12"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              className="items-center bg-yellow-300 rounded-xl p-4"
              onPress={handleSubmit}
            >
              <Text className="text-black text-md font-extrabold">
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    // flex: 1,
    justifyContent: "space-around",
  },
});

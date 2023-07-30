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
import DatePicker from "react-native-datepicker";
import React, { useState } from "react";

export default function WorkForm({ navigation }) {
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [startWork, setStartWork] = useState("");
  const [stopWork, setStopWork] = useState("");

  const handleSubmit = () => {
    console.log("job:", job);
    console.log("company:", company);
    console.log("type:", type);
    console.log("start work:", startWork);
    console.log("stop work:", stopWork);
    navigation.navigate("Root", { screen: "Profile" });
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
              style={{ height: 200, width: 200 }}
            />
          </View>
          <View className="mt-10">
            <TextInput
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
              placeholder="Job Name (ex: Fullstack Developer)"
              value={job}
              onChangeText={setJob}
            />
            <TextInput
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
              placeholder="Company Name (ex: PT. ABC XYZ)"
              value={company}
              onChangeText={setCompany}
            />
            <TextInput
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
              placeholder="Employment type (ex: Full-time)"
              value={type}
              onChangeText={setType}
            />
            <TextInput
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
              placeholder="Start date (ex: 2018)"
              value={startWork}
              onChangeText={setStartWork}
            />
            <TextInput
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
              placeholder="End date (ex: 2020)"
              value={stopWork}
              onChangeText={setStopWork}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              className="items-center bg-yellow-300 rounded-xl p-4"
              onPress={handleSubmit}
            >
              <Text className="text-black text-md font-extrabold">Submit</Text>
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
    justifyContent: "space-around",
  },
});

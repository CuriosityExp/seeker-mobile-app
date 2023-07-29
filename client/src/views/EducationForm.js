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

export default function EducationForm({ navigation }) {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");

  const handleSubmit = () => {
    console.log("university:", university);
    console.log("degree:", degree);
    console.log("field:", field);
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
              placeholder="School / University"
              value={university}
              onChangeText={setUniversity}
            />
            <TextInput
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
              placeholder="Degree"
              value={degree}
              onChangeText={setDegree}
              keyboardType="numeric"
            />
            <TextInput
              className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
              placeholder="Field of study"
              value={field}
              onChangeText={setField}
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

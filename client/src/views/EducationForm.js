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
  ScrollView,
} from "react-native";
import DatePicker from "react-native-datepicker";
import React, { useState } from "react";

export default function EducationForm({ navigation }) {
  const [College, setCollege] = useState("");
  const [educationalLevel, setEducationalLevel] = useState("");
  const [Major, setMajor] = useState("");
  const [startEducation, setStartEducation] = useState("");
  const [graduateEducation, setGraduateEducation] = useState("");

  const handleSubmit = () => {
    console.log("College:", College);
    console.log("educationalLevel:", educationalLevel);
    console.log("Major:", Major);
    console.log("start:", startEducation);
    console.log("graduate:", graduateEducation);
    navigation.navigate("Root", { screen: "Profile" });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.inner}>
            <View className="items-center">
              <Image
                source={require("../../assets/seeker_black.png")}
                style={{ height: 150, width: 150, marginTop: 40 }}
              />
            </View>
            <View className="mt-10">
              <TextInput
                className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
                placeholder="College (ex: Universitas Brawijaya)"
                value={College}
                onChangeText={setCollege}
              />
              <TextInput
                className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
                placeholder="Degrees (ex: Bachelor's Degree)"
                value={educationalLevel}
                onChangeText={setEducationalLevel}
                // keyboardType="numeric"
              />
              <TextInput
                className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
                placeholder="Major (ex: International Relation)"
                value={Major}
                onChangeText={setMajor}
              />
              <TextInput
                className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
                placeholder="Start (ex: 2018)"
                value={startEducation}
                onChangeText={setStartEducation}
              />
              <TextInput
                className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
                placeholder="Graduate (ex: 2022) "
                value={graduateEducation}
                onChangeText={setGraduateEducation}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                className="items-center bg-yellow-300 rounded-xl p-4 mt-5"
                onPress={handleSubmit}
              >
                <Text className="text-black text-md font-extrabold">
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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

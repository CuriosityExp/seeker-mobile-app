import { Image, Text, View, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

export default function AiRecScreen({ navigation }) {
  const data = [
    {
      id: 1,
      Role: "Frontend Developer",
    },
    {
      id: 2,
      Role: "Mobile Developer",
    },
    {
      id: 3,
      Role: "Fullstack Developer",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("AiJob", { keyword: item.Role })}
      className="bg-amber-300 rounded-3xl p-4 mb-7 shadow-md items-center"
    >
      <Text className="text-lg font-semibold mb-2">{item.Role}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 p-4 bg-white">
      <View className="flex-row items-center mb-4">
        <Text className="text-red-500 text-xl mr-2">🔖</Text>
        <Text className="text-xl font-semibold">Choose your role</Text>
      </View>
      <View className="mt-48">
        <FlatList
          className=""
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

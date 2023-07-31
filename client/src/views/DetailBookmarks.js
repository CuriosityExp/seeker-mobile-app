import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";

// ...
export default function DetailBookmarks({ route }) {
  const { url, data } = route.params;
  // console.log(data); // udah dapet datanya

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 80,
          right: 110,
          backgroundColor: "#ffde59",
          width: 150,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          elevation: 4,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
          Generate Todos
        </Text>
      </TouchableOpacity>
    </View>
  );
}

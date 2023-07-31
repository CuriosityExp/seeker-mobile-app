import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

// ...
export default function AllJobScreen() {
  return (
    <WebView source={{ uri: "https://reactnative.dev/" }} style={{ flex: 1 }} />
  );
}

import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Foundation, FontAwesome, Entypo, Feather } from "@expo/vector-icons";

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://w0.peakpx.com/wallpaper/402/322/HD-wallpaper-office-desk-busy-career-computer-laptop-technology-urban-work-workplace.jpg",
        }}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View className="items-center">
            <Image
              source={require("../../assets/seeker_black.png")}
              style={{ height: 250, width: 250 }}
            />
          </View>
          <TouchableOpacity
            onPress={() => console.log("nanti direct ke ai rec screen")}
            className="mt-10 bg-amber-300 rounded-3xl p-5 w-10/12"
          >
            <View
              className="mt-3"
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text
                style={{ fontSize: 14, color: "black" }}
                className="font-bold"
              >
                SEEKER's Job Recommendations
              </Text>
              <View style={{ marginLeft: 10 }}>
                <Image
                  source={require("../../assets/seeker_black.png")}
                  style={{ height: 100, width: 100 }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("nanti direct ke Scrap job list")}
            className="mt-10 bg-amber-300 rounded-3xl p-5 w-10/12 items-end"
          >
            <View
              className="mt-3"
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text
                style={{ fontSize: 14, color: "black" }}
                className="font-bold"
              >
                All Available Jobs List
              </Text>
              <View style={{ marginLeft: 10 }}>
                <Image
                  source={require("../../assets/animated.png")}
                  style={{ height: 90, width: 90 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    alignItems: "center",
    // justifyContent: "center",
    flex: 1,
  },
  recommendationText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

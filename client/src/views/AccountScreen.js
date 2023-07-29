import { Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Foundation, FontAwesome, Entypo } from "@expo/vector-icons";

export default function AccountScreen() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View className="flex items-center">
          <Image
            className="mt-10"
            source={{
              uri: "https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png",
            }}
            style={{ height: 100, width: 100, borderRadius: 300 }}
          />
          <View className="mt-5">
            <Text className="text-center text-3xl font-medium">
              John Lorem Ipsum Doe Wosojugred
            </Text>
          </View>
        </View>
        <View className="mt-10 bg-amber-300 rounded-3xl p-5 w-10/12">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Foundation name="mail" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18, color: "black" }}>
                john.doe@example.com
              </Text>
            </View>
          </View>
          <View
            className="mt-3"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome name="phone" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18, color: "black" }}>085111144558</Text>
            </View>
          </View>
          <View
            className="mt-3"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Entypo name="location-pin" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18, color: "black" }}>
                Magelang, Jawa Tengah
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

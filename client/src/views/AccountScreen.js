import { Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Foundation, FontAwesome, Entypo, Feather } from "@expo/vector-icons";

export default function AccountScreen({ navigation }) {
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
        {/* ini card profile */}
        <View className="mt-10 bg-amber-300 rounded-3xl p-5 w-10/12">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Foundation name="mail" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14, color: "black" }}>
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
              <Text style={{ fontSize: 14, color: "black" }}>085111144558</Text>
            </View>
          </View>
          <View
            className="mt-3"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Entypo name="location-pin" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14, color: "black" }}>
                Magelang, Jawa Tengah
              </Text>
            </View>
          </View>
          <TouchableOpacity
            className="mt-10 items-end ml-10"
            activeOpacity={0.8}
            onPress={() => navigation.navigate("ProfileForm")}
          >
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* ini card work experience */}
        <View className="mt-10 bg-amber-300 rounded-3xl p-5 w-10/12">
          <Text className="mb-5 font-bold text-lg">Work experience:</Text>
          <Text className="text-md">- SAP Consultant Trainee (PT. Seeker)</Text>
          <Text className="text-md">- Internal Audit Staff (PT. Seeker)</Text>

          <TouchableOpacity
            className="mt-10 items-end ml-10"
            activeOpacity={0.8}
            onPress={() => navigation.navigate("WorkForm")}
          >
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* ini card educational background */}
        <View className="mt-10 bg-amber-300 rounded-3xl p-5 w-10/12 mb-32">
          <Text className="mb-5 font-bold text-lg">
            Last educational background:
          </Text>
          <Text className="text-md">University of Indonesia</Text>
          <Text className="text-md">Bachelor's Degree</Text>
          <Text className="text-md">International Relations</Text>
          <TouchableOpacity
            className="mt-10 items-end ml-10"
            activeOpacity={0.8}
            onPress={() => navigation.navigate("EducationForm")}
          >
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

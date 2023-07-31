import { Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import {
  Foundation,
  FontAwesome,
  Entypo,
  Feather,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

const eduData = [
  {
    id: 1,
    College: "University of Indonesia",
    educationalLevel: "Bachelor's Degree",
    startEducation: "2016",
    graduateEducation: "2020",
    Major: "International Relations",
  },
  {
    id: 2,
    College: "Harvard University",
    educationalLevel: "Master's Degree",
    startEducation: "2021",
    graduateEducation: "2023",
    Major: "Computer Science",
  },
];

const workData = [
  {
    id: 1,
    position: "SAP Consultant Trainee",
    company: "PT. Seeker",
    type: "Internship",
    startWork: "2017",
    stopWork: "2023",
  },
  {
    id: 2,
    position: "Software Engineer",
    company: "ABC Tech Solutions",
    type: "Internship",
    startWork: "2017",
    stopWork: "2023",
  },
];

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
          {workData.map((work) => (
            <View key={work.id} className="mb-4">
              <Text className="font-bold">Position:</Text>
              <Text className="mb-2">{work.position}</Text>

              <Text className="font-bold">Company:</Text>
              <Text className="mb-2">{work.company}</Text>

              <Text className="font-bold">Type:</Text>
              <Text className="mb-2">{work.type}</Text>

              <Text className="font-bold">Work period:</Text>
              <Text>
                {work.startWork} - {work.stopWork}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity
                  className="mt-2 items-end"
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("WorkForm")}
                >
                  <Feather name="edit" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="mt-2 items-end ml-3"
                  activeOpacity={0.8}
                  onPress={() => console.log("button delete")}
                >
                  <Ionicons name="trash-outline" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* ini card educational background */}
        <View className="mt-10 bg-amber-300 rounded-3xl p-5 w-10/12">
          <Text className="mb-5 font-bold text-lg">
            Educational background:
          </Text>
          {eduData.map((eduBackground) => (
            <View key={eduBackground.id} className="mb-4">
              <Text className="font-bold">University:</Text>
              <Text className="mb-2">{eduBackground.College}</Text>

              <Text className="font-bold">Degree:</Text>
              <Text className="mb-2">{eduBackground.educationalLevel}</Text>

              <Text className="font-bold">Field of Study:</Text>
              <Text className="mb-2">{eduBackground.Major}</Text>
              <Text className="font-bold">Study Period:</Text>
              <Text>
                {eduBackground.startEducation} -{" "}
                {eduBackground.graduateEducation}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity
                  className="mt-2 items-end"
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("EducationForm")}
                >
                  <Feather name="edit" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="mt-2 items-end ml-3"
                  activeOpacity={0.8}
                  onPress={() => console.log("button delete")}
                >
                  <Ionicons name="trash-outline" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("LandingScreen")}
          className="mt-10 rounded-3xl p-5 w-10/12 mb-24 items-end"
        >
          <View
            className="mt-3"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <AntDesign name="logout" size={32} color="red" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20, color: "red" }}>Logout</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

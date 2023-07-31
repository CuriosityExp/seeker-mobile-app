import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  Foundation,
  FontAwesome,
  Entypo,
  Feather,
  Ionicons,
  AntDesign,
  MaterialIcons,
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
            <View
              className="justify-center mt-5"
              style={{ flexDirection: "row" }}
            >
              <Text style={styles.balance}>My Balance: 5</Text>
              <FontAwesome name="star" size={24} color="green" />
            </View>
            <View className="items-center">
              <TouchableOpacity
                onPress={() => navigation.navigate("Topup")}
                className="bg-green-600 w-32 p-3 items-center rounded-3xl"
              >
                <Text className="font-semibold">Topup Balance</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* ini card profile */}
        <View className="mt-5 bg-amber-300 rounded-3xl p-5 w-10/12">
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
            <Feather name="edit" size={20} color="black" />
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
                  <Ionicons name="add-circle-outline" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="mt-2 items-end ml-3"
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("EditWork")}
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
                  <Ionicons name="add-circle-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="mt-2 items-end ml-3"
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("EditEducation")}
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

        <View className="mt-10 bg-amber-300 rounded-3xl p-5 w-10/12">
          <Text className="font-bold">CV Link:</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("handle cv")}
          className="rounded-3xl p-5 w-10/12 mt-10 items-end"
        >
          <View
            // className="mt-3"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ fontSize: 20, color: "green" }}>Generate CV</Text>
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="newspaper-outline" size={32} color="green" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("LandingScreen")}
          className="rounded-3xl p-5 w-10/12 items-end"
        >
          <View
            // className="mt-3"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ fontSize: 20, color: "black" }}>Logout</Text>
            <View style={{ marginLeft: 10 }}>
              <AntDesign name="logout" size={32} color="black" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("destroy user")}
          className="rounded-3xl p-5 w-10/12 mb-24 items-end"
        >
          <View
            // className="mt-3"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ fontSize: 20, color: "red" }}>Delete Account</Text>
            <View style={{ marginLeft: 10 }}>
              <MaterialIcons name="delete" size={32} color="red" />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  balance: {
    fontSize: 18,
    color: "green",
    marginBottom: 20,
    marginRight: 8,
  },
});

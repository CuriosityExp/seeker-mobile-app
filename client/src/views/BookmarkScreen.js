import { Image, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function BookmarkScreen({ navigation }) {
  const bookmarkData = [
    {
      id: "1",
      title: "Job Title 1",
      company: "Company A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Job Title 2",
      company: "Company B",
      description:
        "Nulla facilisi. Vestibulum eu justo vel orci volutpat eleifend.",
    },
    {
      id: "3",
      title: "Job Title 3",
      company: "Company C",
      description: "Etiam eget dui a metus ultricies commodo.",
    },
    // Add more job bookmarks as needed
    {
      id: "4",
      title: "Job Title 4",
      company: "Company D",
      description:
        "Praesent sit amet nisi non velit luctus gravida a id neque.",
    },
    {
      id: "5",
      title: "Job Title 5",
      company: "Company E",
      description:
        "In euismod nisi eget augue scelerisque, eu hendrerit sapien euismod.",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Todo")}
      className="bg-amber-300 rounded-3xl p-4 mb-4 shadow-md"
    >
      <Text className="text-lg font-semibold mb-2">{item.title}</Text>
      <Text className="text-black">{item.company}</Text>
      <Text className="text-sm text-black mt-2">{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 p-4 bg-white">
      <View className="flex-row items-center mb-4">
        <Text className="text-red-500 text-xl mr-2">🔖</Text>
        <Text className="text-xl font-semibold">My Job Bookmarks</Text>
      </View>
      <View>
        <FlatList
          className="mb-32"
          data={bookmarkData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

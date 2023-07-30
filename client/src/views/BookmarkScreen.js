import { Image, Text, View, FlatList } from "react-native";

export default function BookmarkScreen() {
  const bookmarkData = [
    { id: "1", title: "Job Title 1", company: "Company A" },
    { id: "2", title: "Job Title 2", company: "Company B" },
    { id: "3", title: "Job Title 3", company: "Company C" },
  ];

  const renderItem = ({ item }) => (
    <View className="bg-amber-300 rounded-3xl p-4 mb-4 shadow-md">
      <Text className="text-lg font-semibold mb-2">{item.title}</Text>
      <Text className="text-black">{item.company}</Text>
    </View>
  );

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <View className="flex-row items-center mb-4">
        <Text className="text-red-500 text-xl mr-2">🔖</Text>
        <Text className="text-xl font-semibold">My Bookmarks</Text>
      </View>
      <FlatList
        data={bookmarkData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

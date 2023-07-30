import { Image, Text, View, FlatList } from "react-native";

export default function BookmarkScreen() {
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
    {
      id: "6",
      title: "Job Title 6",
      company: "Company F",
      description:
        "Curabitur fermentum lacus nec ligula venenatis, ut euismod metus tristique.",
    },
    {
      id: "7",
      title: "Job Title 7",
      company: "Company G",
      description:
        "Aenean ultricies nibh ac erat egestas, non pharetra enim tincidunt.",
    },
    {
      id: "8",
      title: "Job Title 8",
      company: "Company H",
      description:
        "Sed vel velit ut sem tristique condimentum sit amet eget orci.",
    },
    {
      id: "9",
      title: "Job Title 9",
      company: "Company I",
      description: "Mauris lacinia quam vel velit efficitur fermentum.",
    },
    {
      id: "10",
      title: "Job Title 10",
      company: "Company J",
      description: "Nam vel nisl eu nibh iaculis tempus.",
    },
    {
      id: "11",
      title: "Job Title 11",
      company: "Company K",
      description: "Fusce eget sem in libero hendrerit venenatis in in lorem.",
    },
    {
      id: "12",
      title: "Job Title 12",
      company: "Company L",
      description:
        "Donec vel tellus ut dolor consequat tincidunt vel eu ligula.",
    },
    {
      id: "13",
      title: "Job Title 13",
      company: "Company M",
      description: "Pellentesque at magna eget neque fermentum auctor.",
    },
    {
      id: "14",
      title: "Job Title 14",
      company: "Company N",
      description: "Aliquam eu tortor a ligula elementum feugiat.",
    },
    {
      id: "15",
      title: "Job Title 15",
      company: "Company O",
      description:
        "Duis fringilla ligula id nunc lacinia, eu viverra risus ultrices.",
    },
  ];

  const renderItem = ({ item }) => (
    <View className="bg-amber-300 rounded-3xl p-4 mb-4 shadow-md">
      <Text className="text-lg font-semibold mb-2">{item.title}</Text>
      <Text className="text-black">{item.company}</Text>
      <Text className="text-sm text-black mt-2">{item.description}</Text>
    </View>
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

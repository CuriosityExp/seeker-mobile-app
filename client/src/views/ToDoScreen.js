import { Image, Text, View } from "react-native";

export default function ToDoScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={require("../../assets/job.png")}
        style={{ height: 150, width: 300 }}
      />
      <Text className="text-3xl mt-10 font-extrabold tex">INI TODO!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  return (
    <>
      <View className="bg-white">
        <View className="items-center">
          <Image
            source={require("../../assets/seeker_black.png")}
            style={{ height: 300, width: 300 }}
          />
          <Text className="text-2xl font-extrabold mb-3">Login</Text>
        </View>
        <View className="p-4">
          <TextInput
            className="border border-gray-400 rounded-2xl px-4 py-2 mb-4"
            placeholder="Username/Email"
            // value={username}
            // onChangeText={setusername}
          />
          <TextInput
            secureTextEntry={true}
            className="border border-gray-400 rounded-2xl px-4 py-2 mb-12"
            placeholder="Password"
            // value={password}
            // onChangeText={setPassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            className="items-center bg-yellow-500 rounded-xl p-4"
            onPress={() => {
              // disini panggil func yang handle submit register
              // handleSubmit();
            }}
          >
            <Text className="text-black font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

//

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandingScreen from "./src/views/LandingScreen";
import RegisterScreen from "./src/views/RegisterScreen";
import LoginScreen from "./src/views/LoginScreen";
import HomeScreen from "./src/views/HomeScreen";
import ToDoScreen from "./src/views/ToDoScreen";
import { Ionicons } from "@expo/vector-icons";
import AccountScreen from "./src/views/AccountScreen";
import { SafeAreaView } from "react-native";
import AndroidSafeArea from "./src/components/AndroidSafeArea";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Todo") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#000", // Color for the active tab icon and label
        tabBarInactiveTintColor: "#888", // Color for inactive tab icons and labels
        tabBarStyle: {
          backgroundColor: "#ffde59",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
          height: 70,
          marginBottom: 20,
          padding: 10,
          paddingBottom: 12,
          margin: 15,
          position: "absolute",
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Todo" component={ToDoScreen} />
      <Tab.Screen name="Profile" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <SafeAreaView style={AndroidSafeArea.droidSafeArea}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Root" component={Root} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

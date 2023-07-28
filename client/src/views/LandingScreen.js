import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ImageBackground, ScrollView } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

export default function LandingScreen() {
  return (
    <Swiper showsButtons={false} loop={false} showsPagination={false}>
      {/* ini slide 1 */}
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: "https://w0.peakpx.com/wallpaper/402/322/HD-wallpaper-office-desk-busy-career-computer-laptop-technology-urban-work-workplace.jpg",
          }}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              height: "100%",
            }}
          >
            <Image
              source={require("../../assets/seeker_white.png")}
              style={{ height: 350, width: 350 }}
            />
            <Text
              style={{
                marginBottom: 5,
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Hi There!
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              Welcome To
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              SEEKER
            </Text>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>

      {/* buat slide 2 nanti */}
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: "https://w0.peakpx.com/wallpaper/402/322/HD-wallpaper-office-desk-busy-career-computer-laptop-technology-urban-work-workplace.jpg",
          }}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              // justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              height: "100%",
            }}
          >
            <Image
              source={require("../../assets/seeker_white.png")}
              style={{ height: 350, width: 350 }}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 30,
                fontWeight: "bold",
                color: "white",
              }}
            >
              SEEKER:
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "white",
                textAlign: "justify",
                padding: 20,
              }}
            >
              Lorem ipsum dolor sit amet. Ut porro cumque aut unde veniam et
              quia quos in veniam possimus et dicta iusto et dolor
              necessitatibus eum nesciunt dolorum? Id eveniet enim hic
              aspernatur recusandae sed laudantium accusantium aut impedit nihil
              est quia reprehenderit non quibusdam rerum nam magni ipsum. Sed
              galisum repellat a magni eligendi id accusantium voluptates nam
              voluptatem accusamus! Aut quidem impedit sed officia omnis et sint
              dolores ut ipsa tempora et quod quia in perspiciatis quae!
            </Text>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>

      {/* buat slide 3 nanti */}
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: "https://w0.peakpx.com/wallpaper/402/322/HD-wallpaper-office-desk-busy-career-computer-laptop-technology-urban-work-workplace.jpg",
          }}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              // justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              height: "100%",
            }}
          >
            <Image
              source={require("../../assets/seeker_white.png")}
              style={{ height: 350, width: 350 }}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 30,
                fontWeight: "bold",
                color: "white",
              }}
            >
              SEEKER:
            </Text>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              Button button
            </Text>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </Swiper>
  );
}

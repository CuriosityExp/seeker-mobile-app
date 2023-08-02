import React, { useRef, useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import baseUrl from "../components/baseUrl";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

export default function AiJobScreen({ navigation, route }) {
  const { keyword } = route.params;

  const data = [
    {
      url: "https://glints.com/id/opportunities/jobs/frontend-developer-angular-vuejs/cf0e754c-77e2-4dd9-a03f-902224e0a281?utm_referrer=explore",
      logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/b43910cc1253621c07b5f915c6364736.png",
      jobTitle: "Frontend Developer (Angular/Vuejs)",
      companyName: "PT Code Development Indonesia",
      companyLocation: "Setiabudi, Jakarta Selatan, DKI Jakarta, Indonesia",
      salary: "IDR5.000.000 - 5.000.100",
      workExperience: "3 – 5 tahun",
      minimumEducation: "Minimal Sarjana (S1)",
    },
    {
      url: "https://glints.com/id/opportunities/jobs/internship-frontend-developer/51ad90a8-e9fe-4455-8aa2-395b7a6467f8?utm_referrer=explore",
      logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/28fd4af8203b3cd0cfe0d071ecbe5a1b.jfif",
      jobTitle: "Internship - Frontend Developer",
      companyName: "Sekawan Media",
      companyLocation: "Kedungkandang, Malang, Jawa Timur, Indonesia",
      salary: "Perusahaan tidak menampilkan gaji",
      workExperience: "Kurang dari setahun",
      minimumEducation: "Minimal Diploma (D1 - D4)",
    },
    {
      url: "https://glints.com/id/opportunities/jobs/frontend-react-native-developer/e9dd5ac8-64c0-4106-84f9-0a5044199036?utm_referrer=explore",
      logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/b43910cc1253621c07b5f915c6364736.png",
      jobTitle: "Frontend React Native Developer",
      companyName: "PT Code Development Indonesia",
      companyLocation: "Setiabudi, Jakarta Selatan, DKI Jakarta, Indonesia",
      salary: "IDR8.000.000 - 15.000.000",
      workExperience: "1 – 3 tahun",
      minimumEducation: "Minimal Sarjana (S1)",
    },
    {
      url: "https://glints.com/id/opportunities/jobs/junior-frontend-developer/3a619d1f-bd54-4617-8f54-b7f255e7df1d?utm_referrer=explore",
      logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/e3a0e22d17e1b20ef93686da49ae5910.png",
      jobTitle: "Junior Frontend Developer",
      companyName: "CV Edukasi Indonesia Jaya",
      companyLocation: "Ciputat, Tangerang Selatan, Banten, Indonesia",
      salary: "IDR1.000.000",
      workExperience: "1 – 3 tahun",
      minimumEducation: "Minimal Sarjana (S1)",
    },
    {
      url: "https://glints.com/id/opportunities/jobs/lead-frontend-engineer/90d7ae17-9571-4b25-9fdb-01f0e9ff4589?utm_referrer=explore",
      logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/02d65651499a0d785f71deb771a3466d.jpg",
      jobTitle: "Lead Frontend Engineer",
      companyName: "PT Teknologi Pamadya Analitika",
      companyLocation: "Tangerang, Banten, Indonesia",
      salary: "Perusahaan tidak menampilkan gaji",
      workExperience: "1 – 3 tahun",
      minimumEducation: " Diperbarui 23 hari yang lalu",
    },
    {
      url: "https://glints.com/id/opportunities/jobs/javascript-frontend-developer-mid-level/8c41aecb-da46-47ec-a6f6-6380c18f4875?utm_referrer=explore",
      logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/18839296049e2b546b93cf8e4f5a9bf6.jpg",
      jobTitle: "Javascript Frontend Developer Mid Level",
      companyName: "Geekgarden",
      companyLocation: "Kapanewon Depok, Kab. Sleman, DI Yogyakarta, Indonesia",
      salary: "Perusahaan tidak menampilkan gaji",
      workExperience: "3 – 5 tahun",
      minimumEducation: "Minimal Diploma (D1 - D4)",
    },
    {
      url: "https://glints.com/id/opportunities/jobs/source/spwd/frontend/b080cc9b-1172-4c1c-9c28-53069f1b0e4d?utm_referrer=explore",
      logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/powered-by-glints-logo.png",
      jobTitle: "Frontend",
      companyName: "Confidential Company",
      companyLocation: "Powered by Glints",
      salary: "Jakarta Pusat, DKI Jakarta, Indonesia",
      workExperience: "SGD3.000 - 5.000",
      minimumEducation: "1 – 3 tahun",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;

  const onSwipeRight = (jobTitle) => {
    // alert(`You swiped right on ${jobTitle}`);
  };

  const forceSwipe = (direction) => {
    const x = direction === "right" ? -SCREEN_WIDTH : SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const forceSwipe2 = (direction) => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
    console.log("add ke bookmark");
    console.log(data[currentIndex]); // ini data percard
  };

  const onSwipeComplete = (direction) => {
    const job = data[currentIndex];
    direction === "right" ? onSwipeRight(job.jobTitle) : null;
    setCurrentIndex((prevIndex) => prevIndex + 1);
    position.setValue({ x: 0, y: 0 });
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ["-30deg", "0deg", "30deg"], // Update this line
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  const renderCard = (index) => {
    const job = data[index];

    if (index < currentIndex) return null;
    if (index === currentIndex) {
      return (
        <Animated.View
          key={index}
          style={[
            getCardStyle(),
            {
              flex: 1,
              //   justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 40,
              padding: 16,
              position: "relative",
              width: 360,
            },
          ]}
        >
          <Image
            style={{
              width: 250,
              height: 250,
              borderRadius: 300,
              marginTop: 30,
            }}
            source={{ uri: job.logo }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            {job.jobTitle}
          </Text>
          <Text style={{ fontSize: 14, color: "black", marginBottom: 5 }}>
            Company: {job.companyName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "black",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Location: {job.companyLocation}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "black",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Salary: {job.salary}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "black",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Experience: {job.workExperience}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "black",
              textAlign: "center",
              marginBottom: 80,
            }}
          >
            Education: {job.minimumEducation}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              className="mr-40"
              style={{
                // backgroundColor: "#ffde59",
                padding: 20,
                borderRadius: 40,
                marginTop: 16,
              }}
              onPress={() => forceSwipe("right")}
            >
              <Foundation name="x" size={48} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              className=""
              style={{
                // backgroundColor: "#ffde59",
                padding: 20,
                borderRadius: 40,
                marginTop: 16,
              }}
              onPress={() => forceSwipe2("right")}
            >
              <Foundation name="heart" size={48} color="red" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      );
    }
    return (
      <Animated.View
        key={index}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 8,
          padding: 16,
          position: "absolute",
          width: SCREEN_WIDTH,
          opacity: currentIndex - index === 1 ? 0.7 : 0,
        }}
      >
        <Image
          style={{ width: 96, height: 96, borderRadius: 48 }}
          source={{ uri: job.logo }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
          {job.jobTitle}
        </Text>
        <Text style={{ fontSize: 14, color: "gray" }}>{job.companyName}</Text>
      </Animated.View>
    );
  };

  const renderJobCards = () => {
    if (currentIndex >= data.length) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "black" }}>
            No Job Available
          </Text>
        </View>
      );
    }

    return data.map((_, index) => renderCard(index));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "gray", padding: 16 }}>
      {renderJobCards()}
    </View>
  );
}

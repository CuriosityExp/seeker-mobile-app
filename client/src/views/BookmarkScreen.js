import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../components/baseUrl";

export default function BookmarkScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState("");
  const [bookmarks, setBookmarks] = useState("");
  // console.log(bookmarks, "<<<<<<<<<<<<<<<<<<<<<<");

  async function getData() {
    try {
      const { data } = await axios.get(`${baseUrl}/users`, {
        headers: { access_token: await AsyncStorage.getItem("access_token") },
      });
      setProfile(data);
      setLoading(false);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getBookmarks() {
    try {
      const { data } = await axios.get(`${baseUrl}/bookmarks`, {
        headers: { access_token: await AsyncStorage.getItem("access_token") },
      });
      setBookmarks(data);
      setLoading(false);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      getData();
      getBookmarks();
    });
    return unsubscribe;
  }, [navigation]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const bookmarkData = [
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

  const renderItem = ({ item, index }) => (
    <View className="bg-amber-300 rounded-3xl p-4 mb-4 shadow-md">
      <Text className="text-lg font-semibold mb-2">{item.customTitle}</Text>
      <Text className="text-black">Company: {item.Job[0].companyName}</Text>
      <Text className="text-sm text-black mt-2">
        Location: {item.Job[0].companyLocation}
      </Text>
      <View
        className="mt-2"
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          className="mt-2 items-end ml-3"
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("Todo", {
              job: item.Job[0],
              bookmarkId: item._id,
            })
          }
        >
          <FontAwesome5 name="clipboard-list" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mt-2 items-end ml-5"
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("DetailBookmarks", {
              url: item.Job[0].url,
              data: item.Job[0],
            })
          }
        >
          <Feather name="more-horizontal" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 p-4 bg-white">
      <View
        className="mt-2"
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <Text style={styles.header}>My Bookmark</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.balance}>Balance: {profile.token}</Text>
          <FontAwesome name="star" size={24} color="green" />
        </View>
      </View>
      <View className="mt-4">
        <FlatList
          className="mb-32"
          data={bookmarks}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

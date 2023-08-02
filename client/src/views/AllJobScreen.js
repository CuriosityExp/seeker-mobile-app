import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseUrl from "../components/baseUrl";

export default function SearchScreen({ navigation, route }) {
  const { keyword } = route.params;
  const { endpoint } = route.params;
  console.log(keyword, "ini keyword");

  // const [searchText, setSearchText] = useState("");
  const [job, setJob] = useState([]);

  // let dummyData = [
  //   {
  //     url: "https://glints.com/id/opportunities/jobs/frontend-developer-angular-vuejs/cf0e754c-77e2-4dd9-a03f-902224e0a281?utm_referrer=explore",
  //     logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/b43910cc1253621c07b5f915c6364736.png",
  //     jobTitle: "Frontend Developer (Angular/Vuejs)",
  //     companyName: "PT Code Development Indonesia",
  //     companyLocation: "Setiabudi, Jakarta Selatan, DKI Jakarta, Indonesia",
  //     salary: "IDR5.000.000 - 5.000.100",
  //     workExperience: "3 – 5 tahun",
  //     minimumEducation: "Minimal Sarjana (S1)",
  //   },
  //   {
  //     url: "https://glints.com/id/opportunities/jobs/internship-frontend-developer/51ad90a8-e9fe-4455-8aa2-395b7a6467f8?utm_referrer=explore",
  //     logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/28fd4af8203b3cd0cfe0d071ecbe5a1b.jfif",
  //     jobTitle: "Internship - Frontend Developer",
  //     companyName: "Sekawan Media",
  //     companyLocation: "Kedungkandang, Malang, Jawa Timur, Indonesia",
  //     salary: "Perusahaan tidak menampilkan gaji",
  //     workExperience: "Kurang dari setahun",
  //     minimumEducation: "Minimal Diploma (D1 - D4)",
  //   },
  //   {
  //     url: "https://glints.com/id/opportunities/jobs/frontend-react-native-developer/e9dd5ac8-64c0-4106-84f9-0a5044199036?utm_referrer=explore",
  //     logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/b43910cc1253621c07b5f915c6364736.png",
  //     jobTitle: "Frontend React Native Developer",
  //     companyName: "PT Code Development Indonesia",
  //     companyLocation: "Setiabudi, Jakarta Selatan, DKI Jakarta, Indonesia",
  //     salary: "IDR8.000.000 - 15.000.000",
  //     workExperience: "1 – 3 tahun",
  //     minimumEducation: "Minimal Sarjana (S1)",
  //   },
  //   {
  //     url: "https://glints.com/id/opportunities/jobs/junior-frontend-developer/3a619d1f-bd54-4617-8f54-b7f255e7df1d?utm_referrer=explore",
  //     logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/e3a0e22d17e1b20ef93686da49ae5910.png",
  //     jobTitle: "Junior Frontend Developer",
  //     companyName: "CV Edukasi Indonesia Jaya",
  //     companyLocation: "Ciputat, Tangerang Selatan, Banten, Indonesia",
  //     salary: "IDR1.000.000",
  //     workExperience: "1 – 3 tahun",
  //     minimumEducation: "Minimal Sarjana (S1)",
  //   },
  //   {
  //     url: "https://glints.com/id/opportunities/jobs/lead-frontend-engineer/90d7ae17-9571-4b25-9fdb-01f0e9ff4589?utm_referrer=explore",
  //     logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/02d65651499a0d785f71deb771a3466d.jpg",
  //     jobTitle: "Lead Frontend Engineer",
  //     companyName: "PT Teknologi Pamadya Analitika",
  //     companyLocation: "Tangerang, Banten, Indonesia",
  //     salary: "Perusahaan tidak menampilkan gaji",
  //     workExperience: "1 – 3 tahun",
  //     minimumEducation: " Diperbarui 23 hari yang lalu",
  //   },
  //   {
  //     url: "https://glints.com/id/opportunities/jobs/javascript-frontend-developer-mid-level/8c41aecb-da46-47ec-a6f6-6380c18f4875?utm_referrer=explore",
  //     logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/18839296049e2b546b93cf8e4f5a9bf6.jpg",
  //     jobTitle: "Javascript Frontend Developer Mid Level",
  //     companyName: "Geekgarden",
  //     companyLocation: "Kapanewon Depok, Kab. Sleman, DI Yogyakarta, Indonesia",
  //     salary: "Perusahaan tidak menampilkan gaji",
  //     workExperience: "3 – 5 tahun",
  //     minimumEducation: "Minimal Diploma (D1 - D4)",
  //   },
  //   {
  //     url: "https://glints.com/id/opportunities/jobs/source/spwd/frontend/b080cc9b-1172-4c1c-9c28-53069f1b0e4d?utm_referrer=explore",
  //     logo: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/powered-by-glints-logo.png",
  //     jobTitle: "Frontend",
  //     companyName: "Confidential Company",
  //     companyLocation: "Powered by Glints",
  //     salary: "Jakarta Pusat, DKI Jakarta, Indonesia",
  //     workExperience: "SGD3.000 - 5.000",
  //     minimumEducation: "1 – 3 tahun",
  //   },
  // ];

  async function fetchJob() {
    try {
      const { data } = await axios({
        method: "post",
        url: `${baseUrl}/${endpoint}`,
        headers: { access_token: await AsyncStorage.getItem("access_token") },
        data: {
          query: keyword,
        },
      });
      setJob(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(job);

  useEffect(() => {
    // setJob(dummyData);
    fetchJob();
    // const filteredData = data?.filter((item) =>
    //   item.jobTitle.toLowerCase().includes(keyword.toLowerCase())
    // );

    // setJob(filteredData);
  }, []);

  // const handleSearch = () => {
  //   const filteredData = data.filter((item) =>
  //     item.jobTitle.toLowerCase().includes(keyword.toLowerCase())
  //   );

  //   setJob(filteredData);
  // };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 40,
          marginBottom: 15,
        }}
        source={{ uri: item.logo }}
      />
      <Text style={styles.cardTitle}>{item.jobTitle}</Text>
      <Text style={styles.cardDescription}>{item.companyLocation}</Text>
      <Text style={styles.cardDescription}>{item.salary}</Text>
      <TouchableOpacity
        className="items-end mt-3"
        onPress={() =>
          navigation.navigate("Detail", { url: item.url, data: job[index] })
        }
      >
        <Feather name="more-horizontal" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View> */}
      <FlatList
        data={job}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: "#555",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

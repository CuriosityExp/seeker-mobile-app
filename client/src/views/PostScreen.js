import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseUrl from "../components/baseUrl";

export default function PostScreen({ navigation }) {
  const [isLiked, setIsLiked] = useState("");
  const [loading, setLoading] = useState(true);
  // const [profile, setProfile] = useState("");
  const [data, setData] = useState("");
  console.log(data, "ini data post");

  // async function getData() {
  //   try {
  //     const { data } = await axios.get(`${baseUrl}/users`, {
  //       headers: { access_token: await AsyncStorage.getItem("access_token") },
  //     });
  //     setProfile(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function getPosts() {
    try {
      const { data } = await axios.get(`${baseUrl}/posts`, {
        headers: { access_token: await AsyncStorage.getItem("access_token") },
      });
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      // getData();
      getPosts();
    });
    return unsubscribe;
  }, [navigation]);

  const handleLike = (postId) => {
    setData((prevData) =>
      prevData.map((post) =>
        post.id === postId ? { ...post, isLiked: !post.isLiked } : post
      )
    );
  };

  const CardPost = ({
    id,
    profilePicture,
    username,
    postContent,
    desc,
    isLiked,
  }) => {
    return (
      <View style={styles.card}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: profilePicture }}
            style={{ height: 80, width: 80, borderRadius: 300 }}
          />
          <Text style={styles.username}>{username}</Text>
        </View>
        <Text style={styles.postContent}>{desc}</Text>
        <Text style={styles.postContent}>{postContent}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.buttonText}>Show Todos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon} onPress={() => handleLike(id)}>
            <Icon
              name={isLiked ? "heart" : "heart-o"}
              size={24}
              color={isLiked ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardPost
            id={item.id}
            profilePicture={item.profileImg}
            username={item.username}
            postContent={item.title}
            desc={item.description}
            isLiked={item.isLiked}
          />
        )}
      />
      <View className="mb-20"></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: 350,
    marginLeft: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  postContent: {
    marginTop: 8,
    fontSize: 17,
    color: "black",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  showButton: {
    backgroundColor: "#ffde59",
    padding: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  icon: {
    marginLeft: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

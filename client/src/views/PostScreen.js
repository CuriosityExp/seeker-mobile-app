import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
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

  const CardPost = ({ id, profilePicture, username, postContent, isLiked }) => {
    return (
      <View className="ml-3" style={styles.card}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: profilePicture }}
            style={{ height: 100, width: 100, borderRadius: 300 }}
          />
          <Text style={styles.username}>{username}</Text>
        </View>
        <Text style={styles.postContent}>{postContent}</Text>
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
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardPost
            id={item.id}
            profilePicture={item.profilePicture}
            username={item.username}
            postContent={item.postContent}
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
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  postContent: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  icon: {
    marginLeft: 10,
  },
});

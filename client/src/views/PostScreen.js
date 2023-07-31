import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PostScreen() {
  const [isLiked, setIsLiked] = useState(false);

  const data = [
    {
      id: "1",
      profilePicture:
        "https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png",
      username: "User1",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu urna augue. Sed dictum nisi eu ultrices pellentesque.",
    },
    {
      id: "2",
      profilePicture:
        "https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png",
      username: "User2",
      postContent:
        "Sed eget elit a libero pretium dictum. In tincidunt quam nunc, et tincidunt risus feugiat quis. Vestibulum facilisis eros eget mauris tincidunt, et venenatis augue sagittis.",
    },
    {
      id: "3",
      profilePicture:
        "https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png",
      username: "User1",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu urna augue. Sed dictum nisi eu ultrices pellentesque.",
    },
    {
      id: "4",
      profilePicture:
        "https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png",
      username: "User2",
      postContent:
        "Sed eget elit a libero pretium dictum. In tincidunt quam nunc, et tincidunt risus feugiat quis. Vestibulum facilisis eros eget mauris tincidunt, et venenatis augue sagittis.",
    },
    {
      id: "5",
      profilePicture:
        "https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png",
      username: "User1",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu urna augue. Sed dictum nisi eu ultrices pellentesque.",
    },
    {
      id: "6",
      profilePicture:
        "https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png",
      username: "User2",
      postContent:
        "Sed eget elit a libero pretium dictum. In tincidunt quam nunc, et tincidunt risus feugiat quis. Vestibulum facilisis eros eget mauris tincidunt, et venenatis augue sagittis.",
    },
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const CardPost = ({ profilePicture, username, postContent }) => {
    // console.log(profilePicture);
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
          <TouchableOpacity style={styles.icon} onPress={handleLike}>
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

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardPost
            profilePicture={item.profilePicture}
            username={item.username}
            postContent={item.postContent}
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

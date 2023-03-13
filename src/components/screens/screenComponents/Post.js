import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Iconic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
const Post = () => {
  const postInfo = [
    {
      id: 1,
      postTitle: "ram_charan",
      postPersonImage: require("../../../../assets/dummyData/profile07.jpg"),
      postImage: require("../../../../assets/dummyData/post08.jpg"),
      likes: 7855,
      isLiked: false,
    },
    {
      id: 2,
      postTitle: "cleverprogramming",
      postPersonImage: require("../../../../assets/dummyData/profile08.jpg"),
      postImage: require("../../../../assets/dummyData/post09.jpg"),
      likes: 449,
      isLiked: false,
    },
    {
      id: 3,
      postTitle: "ashishchancalani",
      postPersonImage: require("../../../../assets/dummyData/profile01.jpg"),
      postImage: require("../../../../assets/dummyData/post10.jpg"),
      likes: 125,
      isLiked: false,
    },
    {
      id: 4,
      postTitle: "jsmastary",
      postPersonImage: require("../../../../assets/dummyData/profile05.jpg"),
      postImage: require("../../../../assets/dummyData/post04.jpg"),
      likes: 55,
      isLiked: false,
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <>
            <View
              key={index}
              style={{
                paddingBottom: 10,
                borderBottomColor: "gray",
                borderBottomWidth: 0.1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 15,
                }}
                key={data.id}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={data.postPersonImage}
                    style={{ width: 40, height: 40, borderRadius: 50 }}
                  />
                  <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {data.postTitle}
                    </Text>
                  </View>
                </View>
                <Feather name="more-vertical" style={{ fontSize: 20 }} />
              </View>
              <View
                style={{
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={data.postImage}
                  style={{ width: "100%", height: 400, resizeMode: "contain" }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 12,
                  paddingVertical: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => setLike(!like)}>
                    <AntDesign
                      name={like ? "heart" : "hearto"}
                      style={{
                        paddingRight: 10,
                        fontSize: 25,
                        color: like ? "red" : "black",
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Iconic
                      name="ios-chatbubble-outline"
                      style={{
                        paddingRight: 10,
                        fontSize: 25,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather
                      name="navigation"
                      style={{
                        paddingRight: 10,
                        fontSize: 25,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <Feather
                  name="bookmark"
                  style={{
                    paddingRight: 0,
                    fontSize: 25,
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 15 }}>
                <Text>
                  Liked by {like ? "you and" : ""}{" "}
                  {like ? data.likes + 1 : data.likes} others
                </Text>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 15,
                    paddingVertical: 2,
                  }}
                >
                  If you enjoy video ! Please like and subscribe
                </Text>
                <Text
                  style={{
                    opacity: 0.4,
                    paddingVertical: 2,
                  }}
                >
                  View all comments
                </Text>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={data.postPersonImage}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,
                        backgroundColor: "orange",
                        marginRight: 10,
                      }}
                    />
                    <TextInput
                      placeholder="Add a comment !"
                      style={{ opacity: 0.7 }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Entypo
                      name="emoji-happy"
                      style={{
                        fontSize: 20,
                        color: "lightgreen",
                        marginRight: 10,
                      }}
                    />
                    <Entypo
                      name="emoji-neutral"
                      style={{ fontSize: 20, color: "pink", marginRight: 10 }}
                    />
                    <Entypo
                      name="emoji-sad"
                      style={{ fontSize: 20, color: "red", marginRight: 0 }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </>
        );
      })}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});

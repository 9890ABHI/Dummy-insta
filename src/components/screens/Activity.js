import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FriendsProfileData } from "./screenComponents/DataBase";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Activity = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            borderBottomWidth: 0.9,
            borderBottomColor: "#DEDEDE",
            padding: 10,
          }}
        >
          Activity
        </Text>

        <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
          <Text style={{ fontWeight: "bold" }}>This week</Text>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            {FriendsProfileData.slice(0, 2).map((data, index) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push("FriendProfile", {
                        name: data.name,
                        profileImage: data.profileImage,
                        follow: data.follow,
                        post: data.posts,
                        follower: data.followers,
                        following: data.following,
                      })
                    }
                    key={index}
                  >
                    <Text key={index}>{data.name} , </Text>
                  </TouchableOpacity>
                </>
              );
            })}
            <Text>Started following you</Text>
          </View>
          <Text style={{ fontWeight: "bold" }}>Earlier</Text>
          {FriendsProfileData.slice(1, 4).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            return (
              <>
                <View key={index} style={{ width: "100%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingVertical: 20,
                      width: "100%",
                    }}
                    key={index}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        navigation.push("FriendProfile", {
                          name: data.name,
                          profileImage: data.profileImage,
                          follow: data.follow,
                          post: data.posts,
                          follower: data.followers,
                          following: data.following,
                        })
                      }
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        maxWidth: "64%",
                      }}
                    >
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 50,
                          marginRight: 10,
                        }}
                      />
                      <Text style={{ fontSize: 15 }}>
                        <Text style={{ fontWeight: "bold" }}>{data.name}</Text>,
                        who you maight know, is on instagram
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ width: follow ? 90 : 72 }}
                      onPress={() => setFollow(!follow)}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: 30,
                          borderRadius: 5,
                          backgroundColor: follow ? null : "#3493D9",
                          borderWidth: follow ? 1 : 0,
                          justifyContent: "center",
                          alignItems: "center",
                          borderColor: follow ? "#DEDEDE" : null,
                          // paddingHorizontal:2
                        }}
                      >
                        <Text
                          style={{
                            color: follow ? "black" : "white",
                            fontSize: 14,
                          }}
                        >
                          {follow ? "Following" : "Follow"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            );
          })}
          <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
            you might known these people
          </Text>
          {FriendsProfileData.slice(0, 6).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            const [close, setClose] = useState(false);
            return (
              <>
                <View key={index}>
                  {close ? null : (
                    <>
                      <View
                        style={{
                          paddingVertical: 10,
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            maxWidth: "64%",
                          }}
                          onPress={() =>
                            navigation.push("FriendProfile", {
                              name: data.name,
                              profileImage: data.profileImage,
                              follow: data.follow,
                              post: data.posts,
                              follower: data.followers,
                              following: data.following,
                            })
                          }
                        >
                          <Image
                            source={data.profileImage}
                            style={{
                              width: 45,
                              height: 45,
                              borderRadius: 50,
                              marginRight: 10,
                            }}
                          />
                          <View style={{ width: "100%" }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                              {data.name}{" "}
                            </Text>
                            <Text style={{ fontSize: 12, opacity: 0.5 }}>
                              {data.accountName}{" "}
                            </Text>
                            <Text style={{ fontSize: 12, opacity: 0.5 }}>
                              {" "}
                              Suggested for you
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          {follow ? (
                            <>
                              <TouchableOpacity
                                onPress={() => setFollow(!follow)}
                                style={{
                                  width: follow ? 90 : 60,
                                }}
                              >
                                <View
                                  style={{
                                    width: "100%",
                                    height: 30,
                                    borderRadius: 5,
                                    backgroundColor: follow ? null : "#3483D3",
                                    borderWidth: follow ? 1 : 0,
                                    borderColor: "#DEDEDE",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: follow ? "black" : "white",
                                    }}
                                  >
                                    {follow ? "Following" : "follow"}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </>
                          ) : (
                            <>
                              <TouchableOpacity
                                onPress={() => setFollow(!follow)}
                                style={{
                                  width: follow ? 90 : 60,
                                }}
                              >
                                <View
                                  style={{
                                    width: "100%",
                                    height: 30,
                                    borderRadius: 5,
                                    backgroundColor: follow ? null : "#3483D3",
                                    borderWidth: follow ? 1 : 0,
                                    borderColor: "#DEDEDE",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: follow ? "black" : "white",
                                    }}
                                  >
                                    {follow ? "Following" : "follow"}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => setClose(true)}
                                style={{ paddingHorizontal: 10 }}
                              >
                                <AntDesign
                                  name="close"
                                  style={{
                                    fontSize: 14,
                                    color: "black",
                                    opacity: 0.8,
                                  }}
                                />
                              </TouchableOpacity>
                            </>
                          )}
                        </View>
                      </View>
                    </>
                  )}
                </View>
              </>
            );
          })}
          <View style={{ padding: 20 }}>
            <Text style={{ color: "#3493D9" }}>See all Suggetion</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Activity;

import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export const ProfileBody = ({
  name,
  profileImage,
  accountName,
  post,
  follower,
  following,
}) => {
  return (
    <View>
      {accountName ? (
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {accountName}
              </Text>
              <Feather
                name="chevron-down"
                style={{
                  fontSize: 20,
                  color: "black",
                  paddingHorizontal: 5,
                  opacity: 0.5,
                }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather
                name="plus-square"
                style={{ fontSize: 20, color: "black", paddingHorizontal: 15 }}
              />
              <Feather name="menu" style={{ fontSize: 20, color: "black" }} />
            </View>
          </View>
        </>
      ) : null}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={profileImage}
            style={{
              width: 80,
              height: 80,
              borderRadius: 80,
              resizeMode: "cover",
            }}
          />
          <Text style={{ paddingVertical: 5, fontWeight: "bold" }}>{name}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{post}</Text>
          <Text>Posts</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{follower}</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileButton = ({ id, name, accountName, profileImage }) => {
  const [follow, setFollow] = useState(follow);
  const navigation = useNavigation();
  return (
    <>
      {id === 0 ? (
        <>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingVertical: 5,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.push("EditProfile", {
                  name: name,
                  accountName: accountName,
                  profileImage: profileImage,
                })
              }
              style={{
                width: "100%",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 35,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#dedede",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: 0.5,
                    opacity: 0.8,
                  }}
                >
                  Edit Profile
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setFollow(!follow)}
              style={{ width: "42%" }}
            >
              <View
                style={{
                  width: "100%",
                  height: 35,
                  borderRadius: 5,
                  backgroundColor: follow ? null : "#3493D3",
                  borderWidth: follow ? 1 : 0,
                  borderColor: "#dedede",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: follow ? "black" : "white" }}>
                  {follow ? "following " : "follow"}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: "42%",
                height: 35,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#dedede",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{}}>Message</Text>
            </View>
            <View
              style={{
                width: "10%",
                height: 35,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#dedede",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name="chevron-down"
                style={{ fontSize: 20, color: "black" }}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};

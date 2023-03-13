import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ProfileBody, ProfileButton } from "./screenComponents/ProfileBody";
import Entypo from "react-native-vector-icons/Entypo";
import BottomPostSec from "./screenComponents/BottomPostSec";

const Profile = () => {
  let circles = [];
  let numberOfCircle = 10;

  for (let index = 0; index < numberOfCircle; index++) {
    circles.push(
      <>
        <View key={index}>
          {index === 0 ? (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                borderWidth: 1,
                opacity: 0.7,
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="plus" style={{ fontSize: 40, color: "black" }} />
            </View>
          ) : (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                backgroundColor: "rgba(52,52,52,0.5)",
                opacity: 0.5,
                borderWidth: 1.5,
                // borderColor: "#3439D3",
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          )}
        </View>
      </>
    );
  }

  return (
    <>
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <View style={{ width: "100%", padding: 10 }}>
          <ProfileBody
            name="joshph Barba"
            accountName="joshph_barba"
            profileImage={require("../../../assets/dummyData/profile01.jpg")}
            follower="3.6M"
            following="450"
            post="458"
          />
          <ProfileButton
            id={0}
            name="joshph Barba"
            accountName="joshph_barba"
            profileImage={require("../../../assets/dummyData/profile01.jpg")}
          />
        </View>
        <View>
          <Text style={{ padding: 10, letterSpacing: 1, fontSize: 14 }}>
            Story Heighlights
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
          >
            {circles}
          </ScrollView>
        </View>
        <BottomPostSec />
      </View>
    </>
  );
};

export default Profile;

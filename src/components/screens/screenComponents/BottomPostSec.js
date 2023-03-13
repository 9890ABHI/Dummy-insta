import { View, Text, ScrollView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionic from "react-native-vector-icons/Ionicons";

const BottomPostSec = () => {
  const Tab = createMaterialTopTabNavigator();

  let sqares = [];
  let numberOfSquare = 6;

  for (let index = 0; index < numberOfSquare; index++) {
    sqares.push(
      <View key={index} style={{ width: "33%" }}>
        <View
          style={{
            width: "100%",
            height: 150,
            marginVertical: 0.5,
            backgroundColor: "black",
            opacity: 0.2,
          }}
        ></View>
      </View>
    );
  }

  const Posts = () => {
    return (
      <>
        <ScrollView
          showVerticalScrollIndicator={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              flexWrap: "wrap",
              flexDirection: "row",
              paddingVeritcal: 5,
              justifyContent: "space-between",
            }}
          >
            {sqares}
          </View>
        </ScrollView>
      </>
    );
  };
  const Video = () => {
    return (
      <>
        <ScrollView
          showVerticalScrollIndicator={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              flexWrap: "wrap",
              flexDirection: "row",
              paddingVeritcal: 5,
              justifyContent: "space-between",
            }}
          >
            {sqares}
          </View>
        </ScrollView>
      </>
    );
  };
  const Tags = () => {
    return (
      <>
        <ScrollView
          showVerticalScrollIndicator={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              flexWrap: "wrap",
              flexDirection: "row",
              paddingVeritcal: 5,
              justifyContent: "space-between",
            }}
          >
            {sqares}
          </View>
        </ScrollView>
      </>
    );
  };
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            backgroundColor: "black",
            height: 1.5,
          },
          tabBarIcon: ({ focused, colour }) => {
            let iconNmae;
            if (route.name === "Posts") {
              iconNmae = focused ? "ios-apps-sharp" : "ios-apps-sharp";
              colour = focused ? "black" : "gray";
            } else if (route.name === "Video") {
              iconNmae = focused
                ? "ios-play-circle"
                : "ios-play-circle-outline";
              colour = focused ? "black" : "gray";
            } else if (route.name === "Tags") {
              iconNmae = focused ? "ios-person" : "ios-person-outline";
              colour = focused ? "black" : "gray";
            }
            return (
              <>
                <Ionic name={iconNmae} color={colour} size={22} />
              </>
            );
          },
        })}
      >
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="Video" component={Video} />
        <Tab.Screen name="Tags" component={Tags} />
      </Tab.Navigator>
    </>
  );
};

export default BottomPostSec;

import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Iconic from "react-native-vector-icons/Ionicons";
import Stories from "./screenComponents/Stories";
import Post from "./screenComponents/Post";

const Home = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "500" }}>Instagram</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 20,
          }}
        >
          <FontAwesome name="plus-square-o" style={{ fontSize: 25 }} />
          <Feather name="navigation" style={{ fontSize: 25 }} />
        </View>
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{ justifyContent: "center", alignItems: "center", padding: 2 }}
        >
          <TouchableOpacity>
            <Iconic
              name="ios-reload-circle-sharp"
              style={{ fontSize: 60, opacity: 0.2 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import SearchBox from "./screenComponents/SearchBox";
import SearchContent from "./screenComponents/SearchContent";
import AntDesign from "react-native-vector-icons/AntDesign";
import Iconic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const Search = () => {
  const [image, setImage] = useState(null);
  const getData = (data) => {
    setImage(data);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBox />
          <SearchContent data={getData} />
          <TouchableOpacity
            style={{
              margin: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign
              name="pluscircleo"
              style={{ fontSize: 40, opacity: 0.5 }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
      {image ? (
        <>
          <View
            style={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(52,52,52,0.8)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StatusBar backgroundColor="#525252" barStyle="dark-content" />
            <View
              style={{
                position: "absolute",
                // top: windowHeight / 6,
                // left: windowWidth / 18,
                backgroundColor: "white",
                width: windowWidth / 1.1,
                height: 465,
                borderRadius: 15,
                zIndex: 1,
                elevation: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                }}
              >
                <Image
                  source={image}
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                />
                <View style={{ paddingLeft: 8 }}>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    the_anonymos_guy
                  </Text>
                </View>
              </View>
              <Image source={image} style={{ width: "100%", height: "80%" }} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  padding: 8,
                }}
              >
                <Iconic name="ios-heart-outline" style={{ fontSize: 25 }} />
                <Iconic
                  name="ios-person-circle-outline"
                  style={{ fontSize: 25 }}
                />
                <Feather name="navigation" style={{ fontSize: 25 }} />
              </View>
            </View>
          </View>
        </>
      ) : null}
    </>
  );
};

export default Search;

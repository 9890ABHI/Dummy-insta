import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();
  const storyinfo = [
    {
      id: 1,
      name: "Your Story",
      image: require("../../../../assets/dummyData/profile01.jpg"),
      statusImage: require("../../../../assets/dummyData/post01.jpg"),
    },
    {
      id: 2,
      name: "ram_charam",
      image: require("../../../../assets/dummyData/profile02.jpg"),
      statusImage: require("../../../../assets/dummyData/post02.jpg"),
    },
    {
      id: 3,
      name: "jsmastary",
      image: require("../../../../assets/dummyData/profile03.jpg"),
      statusImage: require("../../../../assets/dummyData/post03.jpg"),
    },
    {
      id: 4,
      name: "Kashish_kazi",
      image: require("../../../../assets/dummyData/profile04.jpg"),
      statusImage: require("../../../../assets/dummyData/post04.jpg"),
    },
    {
      id: 5,
      name: "claverprogramming",
      image: require("../../../../assets/dummyData/profile05.jpg"),
      statusImage: require("../../../../assets/dummyData/post05.jpg"),
    },
    {
      id: 6,
      name: "ashish_chancalani",
      image: require("../../../../assets/dummyData/profile06.jpg"),
      statusImage: require("../../../../assets/dummyData/post06.jpg"),
    },
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {storyinfo.map((data, index) => (
        <>
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push("Status", {
                name: data.name,
                image: data.statusImage,
                profile: data.image,
              })
            }
          >
            <View
              key={index}
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {data.id == 1 ? (
                <>
                  <View
                    style={{
                      position: "absolute",
                      bottom: 15,
                      right: 10,
                      zIndex: 1,
                    }}
                  >
                    <Entypo
                      name="circle-with-plus"
                      style={{
                        fontSize: 20,
                        color: "#405de6",
                        backgroundColor: "white",
                        borderRadius: 50,
                      }}
                    />
                  </View>
                </>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: "white",
                  borderWidth: 1.8,
                  borderRadius: 50,
                  borderColor: "#c13584",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={data.id}
              >
                <Image
                  source={data.image}
                  style={{
                    width: "92%",
                    height: "92%",
                    borderRadius: 50,
                    backgroundColor: "white",
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 9,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}
              >
                {data.name.length > 12
                  ? data.name.slice(0, 12) + "..."
                  : data.name}
              </Text>
            </View>
          </TouchableOpacity>
        </>
      ))}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({});

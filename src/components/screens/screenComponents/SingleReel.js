import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Video from "react-native-video";

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const videoRef = useRef(null);
  const onBuffer = (buffer) => {
    console.log("Bufferring ", buffer);
  };
  const onError = (error) => {
    console.log("error occur ", error);
  };

  return (
    <>
      <View style={{ width: windowWidth, height: windowHeight }}>
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <Video
            videoRef={videoRef}
            onBuffer={onBuffer}
            onError={onError}
            repeat={true}
            paused={false}
            source={{ uri: item.video }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SingleReel;

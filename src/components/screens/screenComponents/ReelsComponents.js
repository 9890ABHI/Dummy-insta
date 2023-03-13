import { View, Text } from "react-native";
import React, { useState } from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import { videoData } from "./DataBase";
import SingleReel from "./SingleReel";

const ReelsComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <SwiperFlatList
        vertical
        data={videoData}
        onChangeIndex={handleChangeIndexValue}
        renderItem={({ item, index }) => (
          <>
            <SingleReel item={item} index={index} currentIndex={currentIndex} />
          </>
        )}
        keyExtractor={(item, index) => index}
      />
    </>
  );
};

export default ReelsComponents;

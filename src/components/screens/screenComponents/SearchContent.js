import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";

const SearchContent = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const searchData = [
    {
      id: 1,
      images: [
        require("../../../../assets/dummyData/post01.jpg"),
        require("../../../../assets/dummyData/post02.jpg"),
        require("../../../../assets/dummyData/post03.jpg"),
        require("../../../../assets/dummyData/post04.jpg"),
        require("../../../../assets/dummyData/post05.jpg"),
        require("../../../../assets/dummyData/post06.jpg"),
      ],
    },
    {
      id: 2,
      images: [
        require("../../../../assets/dummyData/post03.jpg"),
        require("../../../../assets/dummyData/post02.jpg"),
        require("../../../../assets/dummyData/post04.jpg"),
        require("../../../../assets/dummyData/post01.jpg"),
        require("../../../../assets/dummyData/post09.jpg"),
        require("../../../../assets/dummyData/post10.jpg"),
      ],
    },
    {
      id: 3,
      images: [
        require("../../../../assets/dummyData/post08.jpg"),
        require("../../../../assets/dummyData/post04.jpg"),
        require("../../../../assets/dummyData/post01.jpg"),
        require("../../../../assets/dummyData/post05.jpg"),
        require("../../../../assets/dummyData/post09.jpg"),
        require("../../../../assets/dummyData/post03.jpg"),
      ],
    },
  ];
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 1 ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.map((imageData, imgIndex) => {
                    return (
                      <>
                        <TouchableOpacity
                          onPressIn={() => props.data(imageData)}
                          onPressOut={() => props.data(null)}
                          style={{ padding: 1.5 }}
                          key={imgIndex}
                        >
                          <Image
                            source={imageData}
                            style={{ width: windowWidth / 3.1, height: 150 }}
                          />
                        </TouchableOpacity>
                      </>
                    );
                  })}
                </View>
              </>
            ) : null}
            {data.id === 2 ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      width: windowWidth / 1.5,
                      justifyContent: "space-between",
                    }}
                  >
                    {data.images.slice(0, 4).map((imageData, imgIndex) => (
                      <>
                        <TouchableOpacity
                          onPressIn={() => props.data(imageData)}
                          onPressOut={() => props.data(null)}
                          style={{ padding: 1.5 }}
                          key={imgIndex}
                        >
                          <Image
                            source={imageData}
                            style={{ width: windowWidth / 3.1, height: 150 }}
                          />
                        </TouchableOpacity>
                      </>
                    ))}
                  </View>
                  <TouchableOpacity
                    onPressIn={() => props.data(data.images[5])}
                    onPressOut={() => props.data(null)}
                    style={{ padding: 2 }}
                  >
                    <Image
                      source={data.images[5]}
                      style={{ width: windowWidth / 3.1, height: 300 }}
                    />
                  </TouchableOpacity>
                </View>
              </>
            ) : null}
            {data.id === 3 ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    onPressIn={() => props.data(data.images[2])}
                    onPressOut={() => props.data(null)}
                    style={{ padding: 1.5 }}
                  >
                    <Image
                      source={data.images[2]}
                      style={{ width: windowWidth / 1.5, height: 300 }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      width: 130,
                      justifyContent: "space-between",
                    }}
                  >
                    {data.images.slice(0, 2).map((imageData, imgIndex) => (
                      <>
                        <TouchableOpacity
                          onPressIn={() => props.data(imageData)}
                          onPressOut={() => props.data(null)}
                          style={{ padding: 1.5 }}
                        >
                          <Image
                            source={imageData}
                            style={{ width: windowWidth / 3, height: 150 }}
                          />
                        </TouchableOpacity>
                      </>
                    ))}
                  </View>
                </View>
              </>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default SearchContent;

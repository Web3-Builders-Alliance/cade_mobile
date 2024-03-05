import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import LeftCeiling from "../components/LeftCeiling";
import ButtonGrid from "./ButtonGrid";
import GridButtonLayout from "./DisoverButtonGrid";
import DiscoverGames from "./DiscoverGames";
const { height, width } = Dimensions.get("window");

const Discover = () => {
  const data = [1, 1, 1, 1, 1, 1];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View>
      <LeftCeiling />
      <View className="flex justify-center items-center mt-36">
        <GridButtonLayout />
      </View>
      <View className="ml-10 items-center">
        <DiscoverGames />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: width,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: currentIndex == index ? 50 : 50,
                height: currentIndex == index ? 3 : 3,
                borderRadius: currentIndex == index ? 2 : 2,
                backgroundColor: currentIndex == index ? "white" : "gray",
                marginLeft: 5,
                marginTop: 15,
              }}
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default Discover;

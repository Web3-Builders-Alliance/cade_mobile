import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import LightBoard from "./LightBoard";

const GameLightBoard = () => {
  return (
    <>
      <View>
        <View className="mt-24">
          <LightBoard displayNumber={true} msg="City Stride" />
        </View>
        <View className="flex justify-between flex-row ml-16 mr-16">
          <View className="flex justify-start items-start">
            <ImageBackground
              className="flex justify-start items-start bg-red-100"
              style={{ height: 120, width: 40, flex: 1 }}
              source={require("../assets/images/pipenew.png")}
            />
          </View>
          <View className="flex justify-start items-start">
            <ImageBackground
              className="flex justify-start items-start bg-red-100"
              style={{ height: 120, width: 40, flex: 1 }}
              source={require("../assets/images/pipenew.png")}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default GameLightBoard;

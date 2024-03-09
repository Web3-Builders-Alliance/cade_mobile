import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import GameDescription from "./GameDescription";
const GameScreenCeiling = ({
  displayNumber,
  msg,
}: {
  displayNumber: boolean;
  msg: string;
}) => {
  return (
    <View className="relative mt-10">
      <View className=" bg-yellow-200 h-20 w-full rounded-md">
        <View className="absolute top-0 left-0 ml-10">
          <Image
            source={require("../../assets/images/spotlight.png")}
            style={{ height: 55, width: 55 }}
          />
        </View>
        <View className="absolute top-0 right-0 mr-10">
          <Image
            source={require("../../assets/images/spotlight.png")}
            style={{ height: 55, width: 55 }}
          />
        </View>
        <View className="absolute top-0 left-1/2 -translate-x-1/2">
          <Image
            source={require("../../assets/images/pipe.png")}
            style={{ height: 120, width: 62 }}
          />
        </View>
        <View className="absolute left-1/2 -translate-x-1/2 top-1/4 translate-y-1/4">
          <View
            style={{ height: 110, width: 150 }}
            className="bg-red-500 border-4 border-white items-center flex justify-center rounded-lg"
          >
            <View>
              <Text
                style={{ fontSize: 70, fontFamily: "VT323", color: "white" }}
              >
                5
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameScreenCeiling;

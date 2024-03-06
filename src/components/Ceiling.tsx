import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");

import LightBoard from "./LightBoard";

const Ceiling = ({displayNumber , msg} : {displayNumber : boolean, msg : string}) => {
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
          <LightBoard displayNumber={displayNumber} msg={msg} />
        </View>
      </View>
    </View>
  );
};

export default Ceiling;

import { View, Text, Image } from "react-native";
import React from "react";
import LightBoard from "./LightBoard";

const LeftCeiling = ({ blue, msg } : {blue:boolean , msg : string}) => {
  return (
    <View className="relative mt-2">
      <View className={` ${blue ? 'bg-blue-500' : "bg-yellow-200"} h-20 w-full rounded-md`}>
        <View className="bg-white w-max h-1">
          <Text></Text>
        </View>
        <View className="absolute top-0 left-1/2 -translate-x-20 ml-5">
          {blue ? (
            <>
              <Image
                source={require("../../assets/images/bluespotlight.png")}
                style={{ height: 55, width: 55 }}
              />
            </>
          ) : (
            <>
              <Image
                source={require("../../assets/images/spotlight.png")}
                style={{ height: 55, width: 55 }}
              />
            </>
          )}
        </View>
        <View className="absolute top-0 left-1/2 ml-10">
        {blue ? (
            <>
              <Image
                source={require("../../assets/images/bluespotlight.png")}
                style={{ height: 55, width: 55 }}
              />
            </>
          ) : (
            <>
              <Image
                source={require("../../assets/images/spotlight.png")}
                style={{ height: 55, width: 55 }}
              />
            </>
          )}
        </View>
        <View className="absolute top-0 left-0 translate-x-1/2">
          <Image
            source={require("../../assets/images/pipe.png")}
            style={{ height: 120, width: 62 }}
          />
        </View>
        <View className="absolute left-0 translate-x-6  top-1/4 translate-y-9">
          <LightBoard displayNumber={false} msg={msg} />
        </View>
      </View>
    </View>
  );
};

export default LeftCeiling;

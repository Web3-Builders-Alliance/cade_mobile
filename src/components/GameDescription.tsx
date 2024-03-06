import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MonoText, MonoTextSmall } from "./StylesText";

const GameDescription = ({red} : {red:boolean}) => {
  return (
    <View
      style={{ backgroundColor: "#0F172A", height: 185, width: "auto"  , borderColor : red? "#EF4444" : "#EAB308"}}
      className="flex justify-center items-center flex-row w-96 border-4 border-yellow-500 mb-3 rounded-lg"
    >
      <View className="flex flex-col w-2/5 -translate-y-2">
        <View className="h-3/4">
          <Image
            style={{
              width: 100,
              height: 100,
              marginTop: 20,
              marginLeft: 24,
              borderRadius: 10,
            }}
            className="border-2 border-yellow-400"
            source={require("../../assets/images/tower.jpg")}
          ></Image>
        </View>
        <View className="h-1/4 items-center">
          <TouchableOpacity
            className="border-2 border-white"
            style={{
              width: 100,
              height: 40,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <MonoTextSmall style={{ color: "black" }}>Play</MonoTextSmall>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-3/5 flex flex-col">
        <View className="h-2/5">
          <MonoText style={{ color: "red" , textDecorationLine : 'underline' }}>
            Tower Defence
          </MonoText>
        </View>
        <View className="h-2/5">
          <MonoTextSmall style={{ color: "white" }}>
            Lorem Ipsum is simply dummy MonoTextSmall
          </MonoTextSmall>
        </View>
        <View className="h-1/5">
          <MonoTextSmall style={{ color: "white" }}>
            By- @benzonaak
          </MonoTextSmall>
        </View>
      </View>
    </View>
  );
};

export default GameDescription;

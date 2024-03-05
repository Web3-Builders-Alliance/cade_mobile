import { View, Text, Image, TouchableOpacity } from "react-native";
import { MonoText, MonoTextSmall } from "../components/StylesText";
import React from "react";
import CadeCard from "../components/CadeCard";
import ButtonGrid from "./ButtonGrid";

export default function CadeCardSection() {
  return (
    <View style={{ backgroundColor: "#191414" }} className="h-64 w-max">
      <View className="flex flex-row justify-between items-center ">
        <MonoText>Welcome User,</MonoText>
        {/* <Image
          source={require("../../assets/images/cadenew.png")}
          className="w-12 h-12 rounded-full bg-gray-500"
        /> */}
      </View>
      <ButtonGrid />
      <View className="flex justify-center items-center">
        <CadeCard />
      </View>
    </View>
  );
}

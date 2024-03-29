import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MonoText, MonoTextSmall } from "./StylesText";

const LeaderBoard = ({ red }: { red: boolean }) => {
  return (
    <View
      style={{
        backgroundColor: "#0F172A",
        height: 200,
        width: "auto",
        marginTop : 15,
        borderColor: red ? "#EF4444" : "#EAB308",
      }}
      className="flex-row w-96 border-4 border-yellow-500 mb-3 rounded-lg"
    >
      <View className="flex flex-col">
        <View className="flex justify-center flex-row mt-2">
          <View className="w-1/3 items-center">
            <MonoTextSmall style={{textDecorationLine : 'underline'}}>Sno</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall style={{textDecorationLine : 'underline'}}>PlayerName</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall style={{textDecorationLine : 'underline'}}>Points</MonoTextSmall>
          </View>
        </View>
        <View className="flex justify-center flex-row mt-5">
          <View className="w-1/3 items-center">
            <MonoTextSmall>1</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall>User1</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall>500</MonoTextSmall>
          </View>
        </View>
        <View className="flex justify-center flex-row mt-5">
          <View className="w-1/3 items-center">
            <MonoTextSmall>2</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall>User2</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall>200</MonoTextSmall>
          </View>
        </View>
        <View className="flex justify-center flex-row mt-5">
          <View className="w-1/3 items-center">
            <MonoTextSmall>3</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall>User3</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall>100</MonoTextSmall>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LeaderBoard;

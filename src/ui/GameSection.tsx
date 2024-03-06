import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Ceiling from "../components/Ceiling";
import { MonoText, MonoTextSmall } from "../components/StylesText";
import MachineSliderWithButtons from "./MachineSliderWithButtons";
const { height, width } = Dimensions.get("window");

const GameSection = () => {
  return (
    <View>
      <Ceiling />
      <View className="mt-40">
        <MonoText>OnChain Games</MonoText>
        <View className="flex justify-center items-center mt-3">
          <View
            style={{
              width: width,
              flexDirection: "row",
              marginTop: 4,
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <TouchableOpacity
              className="border-4 border-yellow-400"
              style={{
                width: "40%",
                height: 45,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <MonoTextSmall style={{ color: "black" }}>OnChain</MonoTextSmall>
            </TouchableOpacity>

            <TouchableOpacity
              className="border-4 border-yellow-400"
              style={{
                width: "40%",
                height: 45,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <MonoTextSmall style={{ color: "black" }}>Unity</MonoTextSmall>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="mt-14">
        <MachineSliderWithButtons />
      </View>
    </View>
  );
};

export default GameSection;

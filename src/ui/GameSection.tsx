import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Ceiling from "../components/Ceiling";
import { MonoText, MonoTextSmall } from "../components/StylesText";
import MachineSliderWithButtons from "./MachineSliderWithButtons";
import GameSectionCeiling from "../components/GameSectionCeiling";
const { height, width } = Dimensions.get("window");

const GameSection = () => {
  return (
    <View>
      <View className="bg-white w-max h-1 mt-1">
        <Text></Text>
      </View>
      <GameSectionCeiling displayNumber={false} msg={"Game Section"}/>
      <View className="mt-40">
        <MonoText style={{textDecorationLine:"underline"}}>OnChain Games</MonoText>
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
              className="border-2"
              style={{
                width: "45%",
                height: 45,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderColor : "#F87177"
              }}
            >
              <MonoTextSmall style={{ color: "black" }}>OnChain</MonoTextSmall>
            </TouchableOpacity>

            <TouchableOpacity
              className="border-2"
              style={{
                width: "45%",
                height: 45,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderColor : "#F87177"
              }}
            >
              <MonoTextSmall style={{ color: "black" }}>Unity</MonoTextSmall>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="mt-14">
        <MachineSliderWithButtons red={true}/>
      </View>
    </View>
  );
};

export default GameSection;

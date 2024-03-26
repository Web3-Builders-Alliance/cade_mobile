import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MonoTextSmall } from "../components/StylesText";

const ButtonGrid = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 15,
        gap: 10,
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 12,
        paddingLeft: 12,
      }}
    >
      <TouchableOpacity
        className="border-2 border-yellow-400"
        style={{
          width: "30%",
          height: 44,
          borderRadius: 7,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <MonoTextSmall style={{ textAlign: "center", color: "black" }}>
          Buy
        </MonoTextSmall>
      </TouchableOpacity>
      <TouchableOpacity
        className="border-2 border-yellow-400"
        style={{
          width: "30%",
          height: 44,
          borderRadius: 7,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <MonoTextSmall style={{ textAlign: "center", color: "black" }}>
          Pass
        </MonoTextSmall>
      </TouchableOpacity>
      <TouchableOpacity
        className="border-2 border-yellow-400"
        style={{
          width: "30%",
          height: 44,
          borderRadius: 7,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <MonoTextSmall style={{ textAlign: "center", color: "black" }}>
          Redeem
        </MonoTextSmall>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGrid;

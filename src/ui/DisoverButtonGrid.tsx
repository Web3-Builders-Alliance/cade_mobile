import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MonoTextSmall } from "../components/StylesText";

const GridButtonLayout = () => {
  const Grid = () => {
    return (
      <>
        <View className="flex flex-row gap-2 mt-5">
          <TouchableOpacity
            className="border-2 border-blue-500"
            style={{
              width: 85,
              height: 40,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              margin: 2,
              backgroundColor: "white",
            }}
          >
            <MonoTextSmall style={{ color: "black", marginBottom: 5 }}>
              All
            </MonoTextSmall>
          </TouchableOpacity>
          <TouchableOpacity
            className="border-2 border-blue-500"
            style={{
              width: 85,
              height: 40,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              margin: 2,
              backgroundColor: "white",
            }}
          >
            <MonoTextSmall style={{ color: "black", marginBottom: 5 }}>
              OnChain
            </MonoTextSmall>
          </TouchableOpacity>
          <TouchableOpacity
            className="border-2 border-blue-500"
            style={{
              width: 85,
              height: 40,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              margin: 2,
              backgroundColor: "white",
            }}
          >
            <MonoTextSmall style={{ color: "black", marginBottom: 5 }}>
              Unity
            </MonoTextSmall>
          </TouchableOpacity>
          <TouchableOpacity
            className="border-2 border-blue-500"
            style={{
              width: 85,
              height: 40,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              margin: 2,
              backgroundColor: "white",
            }}
          >
            <MonoTextSmall style={{ color: "black", marginBottom: 5 }}>
              Random
            </MonoTextSmall>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return <>{Grid()}</>;
};

export default GridButtonLayout;

import PrizeScreen from "@/src/screens/PrizeScreen";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Content />
    </View>
  );
}

function Content() {
  return (
    <>
      <PrizeScreen />
    </>
  );
}

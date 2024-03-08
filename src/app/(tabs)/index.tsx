import Ceiling from "@/src/components/Ceiling";
import HomeScreen from "@/src/screens/HomeScreen";
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
    <HomeScreen/>
  );
}

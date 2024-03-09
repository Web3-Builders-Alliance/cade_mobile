import { View, Text } from "react-native";
import React from "react";
import CadeCardMachine from "@/src/components/CadeCardMachine";
import BuyCadeScreen from "@/src/screens/BuyCadeScreen";

const BuyCade = () => {
  return (
    <View className="items-center flex justify-center">
      <BuyCadeScreen />
    </View>
  );
};

export default BuyCade;

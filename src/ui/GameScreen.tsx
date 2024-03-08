import { View, Text } from "react-native";
import React from "react";
import Ceiling from "../components/Ceiling";
import GameMachine from "./GameMachine";
import LightBoard from "../components/LightBoard";
import GameScreenCeiling from "../components/GameScreenCeiling";

const GameScreen = () => {
  return (
    <>
      <View>
        <GameScreenCeiling displayNumber={true} msg="GameName" />
      </View>
      <View className="mt-96">
        <GameMachine red={false} />
      </View>
    </>
  );
};

export default GameScreen;

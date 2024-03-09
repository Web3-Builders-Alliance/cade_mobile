import { View, Text, ScrollView } from "react-native";
import React from "react";
import Ceiling from "../components/Ceiling";
import GameMachine from "./GameMachine";
import LightBoard from "../components/LightBoard";
import GameScreenCeiling from "../components/GameScreenCeiling";

const GameScreen = () => {
  return (
    <>
      <ScrollView>
        <View>
          <GameScreenCeiling displayNumber={true} msg="GameName" />
        </View>
        <View>
          <GameMachine red={false} />
        </View>
      </ScrollView>
    </>
  );
};

export default GameScreen;

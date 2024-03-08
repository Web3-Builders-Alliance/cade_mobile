import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import CoinFlipImage from "../../assets/images/ca66.png";
import FourInLineImage from "../../assets/images/ca66.png";
import TowerDefenceImage from "../../assets/images/ca11.png";
import SkylineSkaddleImage from "../../assets/images/ca33.png";
import MoleSmashImage from "../../assets/images/ca22.png";
import TileSurviveImage from "../../assets/images/ca55.png";
import GameLightBoard from "../components/GameLightBoard";

const { height, width } = Dimensions.get("window");

export default function GameMachine({ red }: { red: boolean }) {
  const data = [
    {
      img: CoinFlipImage,
      name: "Coin Flip",
      maker: "@marchedev",
      machineNumber: 4,
      color: "orange-400",
    },
    {
      img: FourInLineImage,
      name: "FourInLine",
      maker: "@marchedev",
      machineNumber: 6,
      color: "blue-500",
    },
    {
      img: TowerDefenceImage,
      name: "Tower Defence",
      maker: "@marchedev",
      machineNumber: 1,
      color: "red-500",
    },
    {
      img: SkylineSkaddleImage,
      name: "Skyline Skaddle",
      maker: "@benzonak",
      machineNumber: 3,
      color: "green-400",
    },
    {
      img: MoleSmashImage,
      name: "Mole Smash",
      maker: "@benzonak",
      machineNumber: 2,
      color: "orange-500",
    },
    {
      img: TileSurviveImage,
      name: "Tile Survive",
      maker: "@benzonak",
      machineNumber: 5,
      color: "green-400",
    },
  ];

  const background_image = require("../../assets/images/brickwall.jpg");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          height: height / 2 + 200,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 0,
          zIndex: -10,
        }}
      >
        <ImageBackground
          style={{ flex: 1 }}
          borderRadius={5}
          source={background_image}
        >
          <View className="flex justify-center items-center">
            <GameLightBoard />
          </View>
          <View
            style={{
              width: width - 30,
              height: height / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className="mt-14"
              style={{
                height: 350,
                width: 350,
              }}
              source={require("../../assets/images/ca11.png")}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

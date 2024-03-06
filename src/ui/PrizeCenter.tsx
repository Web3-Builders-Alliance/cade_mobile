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
import React, { useRef, useState } from "react";
import CoinFlipImage from "../../assets/images/ca66.png";
import FourInLineImage from "../../assets/images/ca66.png";
import TowerDefenceImage from "../../assets/images/ca11.png";
import SkylineSkaddleImage from "../../assets/images/ca33.png";
import MoleSmashImage from "../../assets/images/ca22.png";
import TileSurviveImage from "../../assets/images/ca55.png";
import { MonoText, MonoTextSmall } from "../components/StylesText";
const { height, width } = Dimensions.get("window");

export default function MachineSliderWithButtons({ red }) {
  const background_image = require("../../assets/images/brickwall.jpg");
  return (
    <View
      className="relative"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          height: height / 2 + 25,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -25,
          zIndex: -10,
        }}
      >
        <ImageBackground
          style={{ flex: 1 }}
          borderRadius={5}
          source={background_image}
        >
          <View style={{ marginLeft: 20 }} className="absolute top-1/2">
            <MonoText>{"<"}</MonoText>
          </View>
          <View style={{ marginRight: 20 }} className="absolute top-1/2 right-0">
            <MonoText>{">"}</MonoText>
          </View>
          <Animated.View
            style={{
              width: width - 45,
              height: height / 2 + 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{ marginBottom: 50 }}
              className="absolute top-1/4 bg-black border-4 border-white rounded-md"
            >
              <Image
                style={{ height: 200, width: 200 }}
                source={require("../../assets/images/freeticket.webp")}
              />
            </View>
            <View
              className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue-500 mr-52 border-4 border-black"
              style={{ height: 110, width: 300 }}
            >
              <View className="absolute top-1/2 left-1/4 -translate-x-1">
                <MonoText style={{ color: "white" }}>Prize Center</MonoText>
              </View>
            </View>
            <View
              className="absolute top-1/2  bg-gray-500 border-4 border-black"
              style={{ height: 30, width: 350, marginTop: 110 }}
            ></View>
          </Animated.View>
        </ImageBackground>
      </View>
    </View>
  );
}

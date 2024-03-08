import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { MonoText, MonoTextSmall } from "../components/StylesText";
import DiscoverGames from "./DiscoverGamesGrid";
const { height, width } = Dimensions.get("window");

export default function MachineSliderWithButtons({ red }: { red: boolean }) {
  const background_image = require("../../assets/images/brickwall.jpg");
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View
        style={{
          height: height / 2 - 45,
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
          <View
            style={{ marginRight: 20 }}
            className="absolute top-1/2 right-0"
          >
            <MonoText>{">"}</MonoText>
          </View>
          <Animated.View
            style={{
              width: width - 45,
              height: height / 2 + 135,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{ marginBottom: 54 }}
              className="absolute top-0 mt-10 bg-black border-4 border-white rounded-md"
            >
              <Image
                style={{ height: 200, width: 200 }}
                source={require("../../assets/images/freeticket.webp")}
              />
            </View>
            <View
              className="absolute top-1/2 left-1/2  -translate-x-1/2  bg-blue-500 border-4 border-black"
              style={{ height: 100, width: 300 }}
            >
              <View className="absolute top-1/4  bg-red-500 items-center w-full">
                <MonoText style={{ color: "white" }}>Prize Center</MonoText>
              </View>
            </View>
            <View
              className="absolute top-1/4 bg-gray-500 border-4 border-black w-full items-center"
              style={{ height: 35, width: 350, marginTop: 110 }}
            >
              <MonoTextSmall>Item Name - GamePass</MonoTextSmall>
            </View>
          </Animated.View>
        </ImageBackground>
      </View>
      <View
        id="button"
        style={{ width: "100%", alignItems: "center", marginTop: 10 }}
      >
        <TouchableOpacity
          className="border-2"
          style={{
            width: "90%",
            height: 45,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderColor: red ? "#EF4444" : "#EAB308",
          }}
        >
          <MonoTextSmall style={{ color: "black" }}>Proceed</MonoTextSmall>
        </TouchableOpacity>
      </View>
      <View>
        <View className="ml-5 mt-2">
          <MonoText style={{ color: "white", textDecorationLine: "underline" }}>
            More Prizes
          </MonoText>
        </View>
        <DiscoverGames />
      </View>
      <View
        id="button"
        style={{ width: "100%", alignItems: "center", marginTop: 10 }}
      >
        <TouchableOpacity
          className="border-2"
          style={{
            width: "90%",
            height: 45,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderColor: red ? "#EF4444" : "#EAB308",
          }}
        >
          <MonoTextSmall style={{ color: "black" }}>Proceed</MonoTextSmall>
        </TouchableOpacity>
      </View>
    </View>
  );
}

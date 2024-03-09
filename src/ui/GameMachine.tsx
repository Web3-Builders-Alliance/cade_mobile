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
import React from "react";
import GameLightBoard from "../components/GameLightBoard";
import { MonoText, MonoTextSmall } from "../components/StylesText";
import GameDescription from "../components/GameDescription";
import LeaderBoard from "../components/LeaderBoard";

const { height, width } = Dimensions.get("window");

export default function GameMachine({ red }: { red: boolean }) {
  const background_image = require("../../assets/images/brickwall.jpg");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <View
        style={{
          height: height / 2 + 180,
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
              height: height / 2 - 50,
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
      <View>
        <TouchableOpacity
          className="border-2"
          style={{
            width: 350,
            height: 45,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderColor: red ? "#EF4444" : "#EAB308",
            marginTop: 20,
          }}
        >
          <MonoTextSmall style={{ color: "black" }}>Play</MonoTextSmall>
        </TouchableOpacity>
      </View>
      <View className="mt-5">
        <GameDescription red={false} />
      </View>
      <View className="mt-5">
        <View>
          <MonoText style={{textDecorationLine : 'underline'}}>LeaderBoard</MonoText>
        </View>
        <LeaderBoard red={false} />
      </View>
    </View>
  );
}

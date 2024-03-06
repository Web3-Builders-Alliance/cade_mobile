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
import GameDescription from "../components/GameDescription";
import { MonoTextSmall } from "../components/StylesText";
import CoinFlipImage from "../../assets/images/ca66.png";
import FourInLineImage from "../../assets/images/ca66.png";
import TowerDefenceImage from "../../assets/images/ca11.png";
import SkylineSkaddleImage from "../../assets/images/ca33.png";
import MoleSmashImage from "../../assets/images/ca22.png";
import TileSurviveImage from "../../assets/images/ca55.png";

const { height, width } = Dimensions.get("window");

export default function MachineSliderWithButtons({red} : {red:boolean}) {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  const background_image = require("../../assets/images/brickwall.jpg");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          height: height / 2 - 12,
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
          <Animated.FlatList
            ref={ref}
            data={data}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={(e) => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex(Math.round(x / (width - 45)));
            }}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <Animated.View
                  style={{
                    width: width - 45,
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
                    source={item.img}
                  />
                </Animated.View>
              );
            }}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: width,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: currentIndex == index ? 50 : 50,
                height: currentIndex == index ? 3 : 3,
                borderRadius: currentIndex == index ? 2 : 2,
                backgroundColor: currentIndex == index ? "white" : "gray",
                marginLeft: 5,
                marginTop: 15,
              }}
            ></View>
          );
        })}
      </View>
      <View className="flex justify-center items-center mt-4">
        <GameDescription red={red} />
      </View>
      <View
        style={{
          width: width,
          flexDirection: "row",
          marginTop: 4,
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {currentIndex == 0 ? null : (
          <TouchableOpacity
          className="border-2"
            style={{
              width: data.length - 1 == currentIndex ? "100%" : 150,
              height: 45,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderColor : red ? "#EF4444" : "#EAB308"
            }}
            onPress={() => {
              setCurrentIndex(currentIndex - 1);
              ref.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) - 1,
              });
            }}
          >
            <MonoTextSmall style={{ color: "black" }}>Previous</MonoTextSmall>
          </TouchableOpacity>
        )}
        {data.length - 1 == currentIndex ? null : (
          <TouchableOpacity
            className="border-2"
            style={{
              width: currentIndex == 0 ? "100%" : 150,
              height: 45,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderColor : red ? "#EF4444" : "#EAB308"
            }}
            onPress={() => {
              setCurrentIndex(currentIndex + 1);
              ref.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) + 1,
              });
            }}
          >
            <MonoTextSmall style={{ color: "black" }}>Next</MonoTextSmall>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

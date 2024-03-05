import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { MonoTextSmall } from "../components/StylesText";

const DiscoverGames = () => {
  const Grid = () => {
    return (
      <>
        <View className="flex flex-row justify-center items-center mt-7">
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/tower.jpg")}
              style={{
                height: 90,
                width: 90,
                borderRadius: 5,
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/tile.jpg")}
              style={{
                height: 90,
                width: 90,
                borderRadius: 5,
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/molegame.jpeg")}
              style={{
                height: 90,
                width: 90,
                borderRadius: 5,
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
        </View>

        <View className="flex flex-row justify-center items-center mt-7">
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/sf.png")}
              style={{
                height: 90,
                width:90,
                borderRadius: 5,
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/coinflip.jpg")}
              style={{
                height: 90,
                width: 90,
                borderRadius: 5,
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/dice.jpg")}
              style={{
                height: 90,
                width: 90,
                borderRadius: 5,
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <View className="flex justify-center items-center">{Grid()}</View>
    </>
  );
};

export default DiscoverGames;

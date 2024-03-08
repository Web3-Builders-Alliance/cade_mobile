import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { MonoTextSmall } from "../components/StylesText";

const PrizeGrid = () => {
  const Grid = () => {
    return (
      <>
        <View style={{margin : 10 , columnGap : 4}} className="flex flex-row justify-center items-center mt-7">
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/heartr.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/lottery.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/lottery1.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
        </View>

        <View style={{margin : 10 , columnGap : 4}} className="flex flex-row justify-center items-center mt-7">
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/freeticket.webp")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/treasure.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <MonoTextSmall>GameName</MonoTextSmall>
          </View>
          <View>
            <Image
              className="border-2 border-white"
              source={require("../../assets/images/bag.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
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

export default PrizeGrid;

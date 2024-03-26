import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { MonoTextSmall } from "../components/StylesText";

const BuyCadeGrid = () => {
  const Grid = () => {
    return (
      <>
        <View style={{margin : 10 , columnGap : 4}} className="flex flex-row justify-center items-center mt-7">
          <View>
            <Image
              className=""
              source={require("../assets/images/cadenew.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
           <View className='items-center'>
              <MonoTextSmall>GameName</MonoTextSmall>
            </View>
          </View>
          <View>
            <Image
              className=""
              source={require("../assets/images/cadenew.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <View className='items-center'>
              <MonoTextSmall>GameName</MonoTextSmall>
            </View>
          </View>
          <View>
            <Image
              className=""
              source={require("../assets/images/cadenew.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <View className='items-center'>
              <MonoTextSmall>GameName</MonoTextSmall>
            </View>
          </View>
        </View>

        <View style={{margin : 10 , columnGap : 4}} className="flex flex-row justify-center items-center mt-7">
          <View>
            <Image
              className=""
              source={require("../assets/images/cade.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <View className='items-center'>
              <MonoTextSmall>GameName</MonoTextSmall>
            </View>
          </View>
          <View>
            <Image
              className=""
              source={require("../assets/images/cade.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <View className='items-center'>
              <MonoTextSmall>GameName</MonoTextSmall>
            </View>
          </View>
          <View>
            <Image
              className=""
              source={require("../assets/images/cade.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 5,
                margin : 10
              }}
            />
            <View className='items-center'>
              <MonoTextSmall>GameName</MonoTextSmall>
            </View>
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

export default BuyCadeGrid;

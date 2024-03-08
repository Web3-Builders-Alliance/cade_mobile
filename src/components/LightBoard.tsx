import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useEffect } from "react";

const LightBoard = ({
  displayNumber,
  msg,
}: {
  displayNumber: boolean;
  msg: string;
}) => {
  let [loaded, error] = useFonts({
    VT323: require("../../assets/fonts/VT323-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <View
        style={{ backgroundColor: "#262626" }}
        className="relative h-40 w-80 lg:w-96 bg-transparent flex items-center justify-center rounded-xl border-4 border-white"
      >
        <View className="flex flex-row justify-center items-center absolute top-0 left-0 right-0 bottom-0">
          {displayNumber ? (
            <>
              <View
                className={`ml-2 w-1/3 h-24 flex justify-center items-center bg-red-500 rounded-lg`}
              >
                <Text
                  style={{ fontFamily: "VT323" }}
                  className="text-6xl text-yellow-300"
                >
                  1
                </Text>
              </View>
            </>
          ) : (
            <></>
          )}

          <View className="w-2/3 h-max flex justify-center items-center">
            <Text
              style={{ fontFamily: "VT323" }}
              className="text-5xl  text-yellow-300 break-words min-w-0 ml-2"
            >
              {msg}
            </Text>
          </View>

          <View className="rounded-full absolute top-0 left-0 w-4 h-4 bg-red-500 animate-blink"></View>
          <View className="rounded-full absolute top-0 left-1/4 w-4 h-4 bg-purple-500 animate-blink"></View>
          <View className="rounded-full absolute top-0 left-2/4 w-4 h-4 bg-cyan-400 animate-blink"></View>
          <View className="rounded-full absolute top-0 left-3/4 w-4 h-4 bg-yellow-300 animate-blink"></View>

          <View className="rounded-full absolute top-0 right-0 w-4 h-4 bg-teal-400 animate-blink"></View>
          <View className="rounded-full absolute top-1/2 right-0 w-4 h-4 bg-orange-400 animate-blink"></View>
          <View className="rounded-full absolute top-1/4 right-0 w-4 h-4 bg-blue-500 animate-blink"></View>
          {/* <View className="rounded-full absolute bottom-1 right-0 w-4 h-4 bg-blue-500 animate-blink"></View> */}

          <View className="rounded-full absolute top-1/4 left-0 w-4 h-4 bg-fuchsia-500 animate-blink"></View>
          <View className="rounded-full absolute top-2/4 left-0 w-4 h-4 bg-pink-600 animate-blink"></View>
          <View className="rounded-full absolute bottom-0 left-0 w-4 h-4 bg-green-500 animate-blink"></View>
          {/* <View className="rounded-full absolute top-3/4 left-0 w-4 h-4 bg-green-500 animate-blink"></View> */}

          <View className="rounded-full absolute bottom-0 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-red-800 animate-blink"></View>
          <View className="rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 animate-blink"></View>
          <View className="rounded-full absolute bottom-0 right-1/2 transform translate-x-1/2 w-4 h-4 bg-green-400 animate-blink"></View>
          <View className="rounded-full absolute bottom-0 right-1/4 transform translate-x-1/2 w-4 h-4 bg-yellow-200 animate-blink"></View>
          <View className="rounded-full absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 animate-blink"></View>
        </View>
      </View>
    </View>
  );
};

export default LightBoard;

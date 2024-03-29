import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PrizeCenter from "../ui/PrizeCenter";
import { ScrollView } from "react-native";
import LeftCeiling from "../components/LeftCeiling";

const PrizeScreen = () => {
  return (
    <>
      <View
        style={{ backgroundColor: "#191414"  , flex:1}}
        className="min-h-screen"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="container px-4 md:px-6 mb-36">
            <View>
              <LeftCeiling blue={false} msg={"Prize Center"} />
              <View className="relative mt-36">
                <PrizeCenter red={false} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default PrizeScreen;

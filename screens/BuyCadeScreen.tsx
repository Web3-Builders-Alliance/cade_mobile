import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PrizeCenter from "../ui/PrizeCenter";
import { ScrollView } from "react-native";
import LeftCeiling from "../components/LeftCeiling";
import BuyCade from "../ui/BuyCade";

const BuyCadeScreen = () => {
  return (
    <>
      <View
        style={{ backgroundColor: "#191414" }}
        className="min-h-screen "
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="container px-4 md:px-6 mb-32">
            <View>
              <LeftCeiling blue={false} msg={"Buy Cade"} />
              <View className="relative mt-36">
                <BuyCade red={false} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default BuyCadeScreen;

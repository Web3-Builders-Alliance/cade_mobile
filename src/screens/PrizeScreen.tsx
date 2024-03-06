import { View, Text } from "react-native";
import React from "react";
import PrizeCenter from "../ui/PrizeCenter";
import { ScrollView } from "react-native";
import Ceiling from "../components/Ceiling";
import LeftCeiling from "../components/LeftCeiling";

const PrizeScreen = () => {
  return (
    <>
     <View style={{ backgroundColor: "#191414" }} className="min-h-screen py-12">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="container px-4 md:px-6">
          <View>
            <LeftCeiling blue={false} msg={"Prize Center"}/>
            <View className="mt-36">
              <PrizeCenter red={false}/>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
    </>
  );
};

export default PrizeScreen;

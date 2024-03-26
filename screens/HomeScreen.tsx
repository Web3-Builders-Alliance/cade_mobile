import { View, Text, ScrollView } from "react-native";
import React from "react";
import Ceiling from "../components/Ceiling";
import MachineSliderWithButtons from "../ui/MachineSliderWithButtons";
import CadeCardSection from "../ui/CadeCardSection";
import Discover from "../ui/Discover";
import GameSection from "../ui/GameSection";
import PrizeScreen from "./PrizeScreen";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "#191414" }} className="min-h-screen py-3">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="container px-4 md:px-6 mb-16">
          <View>
            <CadeCardSection />
            <Ceiling displayNumber={true} msg={"Tower Defence"}/>
            <View className="mt-36">
              <MachineSliderWithButtons red={false} />
            </View>
            <View>
              <Discover />
            </View>
            <View>
              <GameSection />
              {/* <PrizeScreen/> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

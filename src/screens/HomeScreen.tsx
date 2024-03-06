import { View, Text, ScrollView } from "react-native";
import React from "react";
import Ceiling from "../components/Ceiling";
import MachineSlider from "../ui/MachineSlider";
import MachineSliderWithButtons from "../ui/MachineSliderWithButtons";
import CadeCardSection from "../ui/CadeCardSection";
import Discover from "../ui/Discover";
import GameSection from "../ui/GameSection";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "#191414" }} className="min-h-screen py-12">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="container px-4 md:px-6">
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
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

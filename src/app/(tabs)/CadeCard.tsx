import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
//import BottomSheet from "@/src/components/BottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";

const CadeCard = () => {
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);
  return (
    <>
      <BottomSheet snapPoints={snapPoints}>
        <View>
          <Text>Tihs is nn</Text>
        </View>
      </BottomSheet>
    </>
  );
};

export default CadeCard;

import { View, Text, ScrollView, SafeAreaView, Button } from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
//import BottomSheet from "@/src/components/BottomSheet";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

const CadeCard = () => {
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const renderBackdrop = useCallback(
    (prop: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...prop}
      />
    ),
    []
  );

  return (
    <>
      <View style={{ marginTop: 100 }}>
        <Button title="close" onPress={handleClosePress}></Button>
        <Button title="open" onPress={handleOpenPress}></Button>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle = {{backgroundColor : "green"}}
        index={1}
        snapPoints={snapPoints}
      >
        <View>
          <Text>Tihs is nn</Text>
        </View>
      </BottomSheet>
    </>
  );
};

export default CadeCard;

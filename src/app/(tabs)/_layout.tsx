import React, { useCallback, useMemo, useRef } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Text, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const snapPoints = useMemo(() => ["25%", "80%", "70%"], []);
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
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={{ backgroundColor: "white" }}
        backgroundStyle={{ backgroundColor: "#191414" }}
        index={1}
        snapPoints={snapPoints}
      >
        <View>
          <Text>FFF</Text>
        </View>
      </BottomSheet>

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: useClientOnlyValue(false, false),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerRight: () => (
              <Link href="/" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="Prize"
          options={{
            title: "Prize",
            tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
          }}
        />
        <Tabs.Screen
          name="CadeCard"
          options={{
            title: "Card",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="credit-card" color={color} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              
              handleClosePress();
            },
          })}
        />
        <Tabs.Screen
          name="BuyCade"
          options={{
            title: "Buy Cade",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="dollar" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="P2P"
          options={{
            title: "P2P",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="handshake-o" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

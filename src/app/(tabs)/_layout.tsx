import React, { useCallback, useMemo, useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  Button,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import BottomSheet from "@/src/components/BottomSheet";
import { MonoText, MonoTextSmall } from "@/src/components/StylesText";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <>
      <BottomSheet visible={bottomSheetVisible} onClose={closeBottomSheet}>
        <ScrollView nestedScrollEnabled={true}>
          <View>
            <MonoText>Testing</MonoText>
          </View>
          <TouchableOpacity
            className="border-2"
            style={{
              width: 150,
              height: 45,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderColor: "red",
            }}
            onPress={() => closeBottomSheet()}
          >
            <MonoTextSmall style={{ color: "black" }}>Previous</MonoTextSmall>
          </TouchableOpacity>
        </ScrollView>
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
              e.preventDefault()
              openBottomSheet();
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

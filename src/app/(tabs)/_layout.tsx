import React, { useCallback, useMemo, useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import BottomSheet from "@/src/components/BottomSheet";
import { MonoText, MonoTextSmall } from "@/src/components/StylesText";
import { FontAwesome5 } from "@expo/vector-icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const background_image = require("../../../assets/images/ig2.png");
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
            <MonoText style={{ textDecorationLine: "underline" }}>
              CadeCard #132
            </MonoText>
          </View>
          <View className="mt-2">
            <Text style={{ color: "white", fontFamily: "VT323", fontSize: 22 }}>
              Card Type : Premium
            </Text>
            <Text style={{ color: "white", fontFamily: "VT323", fontSize: 22 }}>
              Cade Balance : 100
            </Text>
          </View>
          <View
            className="relative"
            style={{
              width: "100%",
              height: 230,
              backgroundColor: "gray",
              marginTop: 20,
              borderRadius: 7,
              borderColor: "white",
              borderWidth: 2,
            }}
          >
            <ImageBackground
              style={{ flex: 1 }}
              borderRadius={5}
              source={background_image}
            >
              <View className="absolute top-0 left-0 ml-5 mt-5">
                <Image
                  source={require("../../../assets/images/cadenew.png")}
                  className="w-12 h-12 rounded-full border border-white"
                />
              </View>
              <View className="absolute right-0 top-0 mr-5 mt-5">
                <MonoTextSmall>44Su...5nqz</MonoTextSmall>
              </View>
              <View className="absolute bottom-0 left-0 ml-5 mb-5">
                <MonoText style={{ textDecorationLine: "underline" }}>
                  UserName
                  <MonoText></MonoText>
                </MonoText>
              </View>
            </ImageBackground>
          </View>
          <View className="items-center mt-5">
            <TouchableOpacity
              className="border-2"
              style={{
                width: "90%",
                height: 45,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderColor: "red",
              }}
              onPress={() => closeBottomSheet()}
            >
              <MonoTextSmall style={{ color: "black" }}>
                Refil Cade{" "}
                <FontAwesome5 name="gas-pump" size={24} color="black" />
              </MonoTextSmall>
            </TouchableOpacity>
          </View>
          <View className="items-center mt-5">
            <TouchableOpacity
              className="border-2"
              style={{
                width: "90%",
                height: 45,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderColor: "red",
              }}
              onPress={() => closeBottomSheet()}
            >
              <MonoTextSmall style={{ color: "black" }}>Close</MonoTextSmall>
            </TouchableOpacity>
          </View>
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
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
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

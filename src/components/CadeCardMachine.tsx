import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { MonoText, MonoTextSmall } from "./StylesText";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CadeCardMachine = ({ closeButton }: { closeButton: any }) => {
  return (
    <>

      <View
        style={{ width: "85%", borderWidth: 7, marginTop: 100 , height : 550 }}
        className="relative bg-orange-500 items-center flex justify-center rounded-2xl border-white"
        >
        <View className="rounded-2xl absolute top-0 left-1/2 -translate-x-1/2 w-64 mt-5 h-8 bg-black">
          <View className="flex flex-row justify-center gap-x-10 mt-1.5">
            <View
              className={`rounded-full w-4 h-4 bg-red-500 animate-blink`}
            ></View>
            <View
              className={`rounded-full w-4 h-4 bg-red-500 animate-blink`}
            ></View>
            <View
              className={`rounded-full w-4 h-4 bg-red-500 animate-blink`}
            ></View>
            <View
              className={`rounded-full w-4 h-4 bg-red-500 animate-blink`}
            ></View>
          </View>
        </View>
        <View
          style={{
            height: "48%",
            width: "94%",
            bottom: 70,
          }}
          className="relative border-4 border-white rounded-2xl bg-blue-500"
        >
          <View className="flex flex-row items-center ml-5">
            <View className="w-2/4">
              <Text
                style={{ fontSize: 26, fontFamily: "VT323", color: "white" }}
              >
                Cade Card Machine
              </Text>
            </View>
            <View className="ml-5">
              <FontAwesome name="wifi" color={"white"} size={20} />
            </View>
            <View className="ml-2">
              <FontAwesome name="power-off" color={"white"} size={20} />
            </View>
          </View>
          <View className="items-center">
            <View className="mt-5">
              <Text
                style={{ fontFamily: "VT323", fontSize: 22, color: "white" }}
              >
                Payment Method :{" "}
                <Text
                  className="bg-black"
                  style={{
                    color: "yellow",
                    textDecorationLine: "underline",
                    fontSize: 22,
                  }}
                >
                  USDC
                </Text>
              </Text>
            </View>
            <View className="mt-2">
              <Text
                style={{ fontFamily: "VT323", fontSize: 22, color: "white" }}
              >
                Network :{" "}
                <Text
                  className="bg-black"
                  style={{
                    color: "yellow",
                    textDecorationLine: "underline",
                    fontSize: 22,
                  }}
                >
                  Mainnet
                </Text>
              </Text>
            </View>
            <View className="flex flex-row gap-x-5 mt-5">
              <View>
                <Image
                  style={{ width: 90, height: 90, bottom: 24 }}
                  source={require("../../assets/images/cadenew.png")}
                />
              </View>
              <View className="items-center">
                <Text
                  style={{
                    fontFamily: "VT323",
                    fontSize: 26,
                    color: "white",
                    textDecorationLine: "underline",
                  }}
                >
                  20x Cade Coin
                </Text>
              </View>
            </View>
            <View style={{ bottom: 34 }}>
              <Text
                style={{ color: "white", fontFamily: "VT323", fontSize: 25 }}
              >
                No Transaction....
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 300,
            height: 170,
            bottom: 15,
            backgroundColor: "#4B5563",
          }}
          className="items-center absolute bottom-0 rounded-2xl border-4 border-white flex flex-col"
        >
          <View className="flex flex-row  mt-5 h-1/2">
            <View className="flex flex-col">
              <TouchableOpacity
                className="border-2"
                style={{
                  width: 60,
                  height: 40,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderColor: "#EAB308",
                  margin: 5,
                }}
              >
                <Text
                  className="items-center"
                  style={{
                    color: "black",
                    fontFamily: "VT323",
                    fontSize: 25,
                    bottom: 3,
                  }}
                >
                  {"<"}
                </Text>
              </TouchableOpacity>
              <View className="items-center">
                <Text
                  style={{ fontFamily: "VT323", fontSize: 16 }}
                  className="text-white"
                >
                  Prev
                </Text>
              </View>
            </View>

            <View className="flex flex-col">
              <TouchableOpacity
                className="border-2"
                style={{
                  width: 60,
                  height: 40,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderColor: "#EAB308",
                  margin: 5,
                }}
              >
                <MonoTextSmall style={{ color: "black" }}>{"✔️"}</MonoTextSmall>
              </TouchableOpacity>
              <View className="items-center">
                <Text
                  style={{ fontFamily: "VT323", fontSize: 16 }}
                  className="text-white"
                >
                  Confirm
                </Text>
              </View>
            </View>

            <View className="flex flex-col">
              <TouchableOpacity
                className="border-2"
                style={{
                  width: 60,
                  height: 40,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderColor: "#EAB308",
                  margin: 5,
                }}
                onPress={closeButton}
              >
                <MonoTextSmall style={{ color: "black" }}>{"❌"}</MonoTextSmall>
              </TouchableOpacity>
              <View className="items-center">
                <Text
                  style={{ fontFamily: "VT323", fontSize: 16 }}
                  className="text-white"
                >
                  Cancel
                </Text>
              </View>
            </View>

            <View className="flex flex-col">
              <TouchableOpacity
                className="border-2"
                style={{
                  width: 60,
                  height: 40,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderColor: "#EAB308",
                  margin: 5,
                }}
              >
                <Text
                  className="items-center"
                  style={{
                    color: "black",
                    fontFamily: "VT323",
                    fontSize: 25,
                    bottom: 3,
                  }}
                >
                  {">"}
                </Text>
              </TouchableOpacity>
              <View className="items-center">
                <Text
                  style={{ fontFamily: "VT323", fontSize: 16 }}
                  className="text-white"
                >
                  Next
                </Text>
              </View>
            </View>
          </View>
          <View
            className="flex flex-row items-center h-1/2 mt-3"
            style={{ bottom: 20 }}
          >
            <View className="flex justify-center items-center ml-5">
              <Text
                style={{ fontFamily: "VT323", fontSize: 20, color: "white" }}
              >
                Select and Pay
              </Text>
            </View>
            <TouchableOpacity
              className="border-2 ml-5"
              style={{
                width: 60,
                height: 40,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderColor: "#EAB308",
                margin: 5,
              }}
            >
              <Image
                style={{ height: 35, width: 35 }}
                borderRadius={5}
                source={require("../../assets/images/bonk.jpg")}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity
              className="border-2"
              style={{
                width: 60,
                height: 40,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderColor: "#EAB308",
                margin: 5,
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                borderRadius={5}
                source={require("../../assets/images/usdc.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        className="flex justify-center"
        style={{ marginTop: -220, zIndex: -1 }}
      >
        <View
          style={{ width: 310 }}
          className='relative overflow-y-hidden bg-center bg-[url("/ig.png")] object-center bg-no-repeat border-2 border-gray-600 flex flex-col justify-center items-center bg-slate-800 h-96 rounded-xl'
        >
          <View className="absolute top-0 right-0 m-3">
            <Text className="text-white font-abc text-3xl">----</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CadeCardMachine;

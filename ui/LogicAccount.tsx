import {
    View,
    Dimensions,
    TouchableOpacity,
    Animated,
    Image,
    ImageBackground,
    Text,
  } from "react-native";
  import React, {
    useRef,
    useCallback,
    useMemo,
    useEffect,
    useState,
  } from "react";
  import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
  import { MonoText, MonoTextSmall } from "../components/StylesText";
  import PrizeGrid from "./PrizesGrid";
  const { height, width } = Dimensions.get("window");
  
  import { TextInput, Button } from "react-native";
  
  interface SocialLoginButtonProps {
    src: string;
  }
  
  const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ src }) => (
    <View className="flex flex-1 justify-center items-center">
      <Image
        source={{ uri: src }}
        className="rounded-xl aspect-[1.67] w-[87px]"
      />
    </View>
  );
  
  const LoginAccount: React.FC = () => {
    const socialLogins = [
      {
        key: "1",
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9077637c6082e0591d67c1a12a012409be64df15474ad1285165a3c4061a9a87?apiKey=75db725d9df44d17ab033bc67c0933e6&",
      },
      {
        key: "2",
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee3beff8b1888e36f56680bb17a806fc9a451a596539581f0517eacf2d5e0cbf?apiKey=75db725d9df44d17ab033bc67c0933e6&",
      },
      {
        key: "3",
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f07d6adfc8dbf4c00c24c00ab1d83a4be855658aab884ae7fc18c1962b267e3f?apiKey=75db725d9df44d17ab033bc67c0933e6&",
      },
    ];
  
    return (
      <View className="flex flex-col px-4 pb-4 bg-black max-w-[424px]">
        <View className="flex flex-col justify-center shadow-2xl rounded-[44px]">
          <View className="flex overflow-hidden relative flex-col justify-center w-full bg-blend-overlay aspect-[0.5] backdrop-blur-[13.51388931274414px] fill-stone-700">
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc688b0ce24534cfc38157c8779f98730a1533d539548a631a851b78aa343f72?apiKey=75db725d9df44d17ab033bc67c0933e6&",
              }}
              className="object-cover absolute inset-0 size-full"
            />
            {/* Repeated content omitted for brevity */}
            <View className="flex relative gap-5 justify-between self-center max-w-full w-[276px]">
              {/* Repeated blocks omitted */}
            </View>
            <View className="flex relative flex-col items-center pl-2.5">
              {/* Repeated blocks omitted */}
              <View className="flex justify-center items-center mt-12 max-w-full text-3xl tracking-normal leading-5 text-center text-black bg-zinc-300 w-[270px]">
                {/* Password Entry */}
              </View>
              <View className="mt-9 text-2xl tracking-normal leading-5 text-center text-white">
                <Text>Forgot Password?</Text>
              </View>
              <View className="flex gap-px mt-6 text-center text-black">
                {/* Sign in Button */}
              </View>
              <View className="flex gap-2.5 self-start mt-10 ml-4 text-2xl tracking-normal leading-5 text-center text-white">
                <View className="shrink-0 my-auto h-px bg-gray-200 border border-gray-200 border-solid w-[81px]" />
                <View className="flex-auto">
                  <Text>Or Continue With</Text>
                </View>
              </View>
              <View className="flex gap-5 self-stretch mt-10 mr-6 ml-6">
                {socialLogins.map((login) => (
                  <SocialLoginButton key={login.key} src={login.src} />
                ))}
              </View>
              <View className="mt-14 text-3xl tracking-normal leading-5 text-center text-white">
                <Text>Create Account</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex relative flex-col justify-center px-6 py-3 w-full text-2xl text-center shadow bg-blend-overlay backdrop-blur-2xl bg-black bg-opacity-20 rounded-[50px_50px_0px_0px]">
          {/* Footer blocks omitted */}
        </View>
      </View>
    );
  };
  
  export default LoginAccount;
  
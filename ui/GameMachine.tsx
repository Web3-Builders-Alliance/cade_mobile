import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import GameLightBoard from '../components/GameLightBoard';
import {MonoText, MonoTextSmall} from '../components/StylesText';
import GameDescription from '../components/GameDescription';
import LeaderBoard from '../components/LeaderBoard';
import {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import CadeCardMachine from '../components/CadeCardMachine';
// import ConnectButton from "../Utils/ConnectButton";
// import {useMobileWallet} from '../Utils/useMobileWallet'
import { useNavigation } from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

export default function GameMachine({red}: {red: boolean}) {
  //const {connect}  = useMobileWallet()
  const nav = useNavigation()
  const background_image = require('../assets/images/brickwall.jpg');
  const [showBackDrop, setShowBackDrop] = useState(false);
  const snapPoints = useMemo(() => ['25%', '80%', '70%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = () => {
    setShowBackDrop(true);
    bottomSheetRef.current?.expand();
  };

  const handleClosePress = () => {
    setShowBackDrop(true);
    bottomSheetRef.current?.close();
  };

  const renderBackdrop = useCallback(
    (prop: any) =>
      showBackDrop ? (
        <BottomSheetBackdrop
          //appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...prop}
        />
      ) : null,
    [showBackDrop],
  );

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={{backgroundColor: 'white'}}
        backgroundStyle={{backgroundColor: '#191414'}}
        index={-1}
        snapPoints={snapPoints}>
        <View className="flex justify-center items-center">
          <CadeCardMachine closeButton={handleClosePress} />
        </View>
      </BottomSheet>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          zIndex: -10,
        }}>
        <View
          style={{
            height: height / 2 + 220,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 0,
            zIndex: -10,
          }}>
          <ImageBackground
            style={{flex: 1}}
            borderRadius={5}
            source={background_image}>
            <View className="flex justify-center items-center">
              <GameLightBoard />
            </View>
            <View
              style={{
                width: width - 30,
                height: height / 2 - 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                className="mt-14"
                style={{
                  height: 350,
                  width: 350,
                }}
                source={require('../assets/images/ca11.png')}
              />
            </View>
          </ImageBackground>
        </View>
        <View>
          <TouchableOpacity
            className="border-2"
            style={{
              width: 350,
              height: 45,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderColor: red ? '#EF4444' : '#EAB308',
              marginTop: 20,
            }}
            onPress={() => nav.navigate("ParticularGameScreen")}
            // onPress={() => connect()}
          >
            <MonoTextSmall style={{color: 'black'}}>Play</MonoTextSmall>
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <GameDescription
            red={false}
            name={'gameName'}
            img={require('../assets/images/ca33.png')}
          />
        </View>
        <View className="mt-5">
          <View>
            <MonoText style={{textDecorationLine: 'underline'}}>
              LeaderBoard
            </MonoText>
          </View>
          <LeaderBoard red={false} />
        </View>
        {/* <View>
          <ConnectButton title="Connect"/>
        </View> */}
      </View>
    </>
  );
}

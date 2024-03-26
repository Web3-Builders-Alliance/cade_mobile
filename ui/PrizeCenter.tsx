import {
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import React, {useRef, useCallback, useMemo, useEffect, useState} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {MonoText, MonoTextSmall} from '../components/StylesText';
import PrizeGrid from './PrizesGrid';
const {height, width} = Dimensions.get('window');

export default function MachineSliderWithButtons({red}: {red: boolean}) {
  const [showBackDrop, setShowBackDrop] = useState(false);
  const background_image = require('../assets/images/brickwall.jpg');
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
          appearsOnIndex={0}
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
        <View>
          <View>
            <MonoText>Confirm Your Transaction</MonoText>
          </View>
          <View className="flex justify-center items-center mt-10">
            <Image
              style={{height: 300, width: 300}}
              source={require('../assets/images/freeticket.webp')}
            />
          </View>
          <View className="flex flex-row justify-between  ml-2 mr-2">
            <Text
              style={{
                color: 'white',
                fontFamily: 'VT323-Regular',
                fontSize: 25,
              }}>
              Quantity - 1
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'VT323-Regular',
                fontSize: 25,
              }}>
              Holder - 100
            </Text>
          </View>
          <View className="mt-3 ml-2">
            <Text
              style={{
                color: 'white',
                fontFamily: 'VT323-Regular',
                fontSize: 25,
              }}>
              Holder - 100
            </Text>
          </View>
          <View className="flex flex-col items-center mt-5">
            <TouchableOpacity
              className="border-2"
              style={{
                width: '90%',
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: red ? '#EF4444' : '#EAB308',
              }}
              onPress={() => handleClosePress()}>
              <MonoTextSmall style={{color: 'black'}}>
                Mint as NFT
              </MonoTextSmall>
            </TouchableOpacity>
            <TouchableOpacity
              className="border-2 mt-5"
              style={{
                width: '90%',
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: red ? '#EF4444' : '#EAB308',
              }}
              onPress={() => handleClosePress()}>
              <MonoTextSmall style={{color: 'black'}}>Cancel</MonoTextSmall>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>

      <View style={{flex: 1, position: 'relative'}}>
        <View
          style={{
            height: height / 2 - 45,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -25,
            zIndex: -10,
          }}>
          <ImageBackground
            style={{flex: 1}}
            borderRadius={5}
            source={background_image}>
            <View style={{marginLeft: 20}} className="absolute top-1/2">
              <MonoText>{'<'}</MonoText>
            </View>
            <View
              style={{marginRight: 20}}
              className="absolute top-1/2 right-0">
              <MonoText>{'>'}</MonoText>
            </View>
            <Animated.View
              style={{
                width: width - 40,
                height: height / 2 + 135,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{marginBottom: 54}}
                className="absolute top-0 mt-8 bg-black border-4 border-white rounded-md">
                <Image
                  style={{height: 200, width: 200}}
                  source={require('../assets/images/freeticket.webp')}
                />
              </View>
              <View
                className="absolute top-1/2 left-0 translate-x-10  bg-blue-500 border-4 border-black"
                style={{height: 100, width: 300}}>
                <View className="absolute top-1/4  bg-red-500 items-center w-full">
                  <MonoText style={{color: 'white'}}>Prize Center</MonoText>
                </View>
              </View>
              <View
                className="absolute top-1/4 bg-gray-500 border-4 border-black w-full items-center"
                style={{height: 35, width: 350, marginTop: 110}}>
                <MonoTextSmall>Item Name - GamePass</MonoTextSmall>
              </View>
            </Animated.View>
          </ImageBackground>
        </View>
        <View
          id="button"
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 10,
            zIndex: -10,
          }}>
          <TouchableOpacity
            className="border-2"
            style={{
              width: '90%',
              height: 45,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderColor: red ? '#EF4444' : '#EAB308',
            }}
            onPress={() => handleOpenPress()}>
            <MonoTextSmall style={{color: 'black'}}>Instant Mint</MonoTextSmall>
          </TouchableOpacity>
        </View>
        <View style={{zIndex: -10}}>
          <View className="ml-5 mt-2">
            <MonoText style={{color: 'white', textDecorationLine: 'underline'}}>
              More Prizes
            </MonoText>
          </View>
          <View style={{zIndex: -10}}>
            <PrizeGrid />
          </View>
        </View>
        <View
          id="button"
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 10,
            zIndex: -10,
          }}>
          <TouchableOpacity
            className="border-2"
            style={{
              width: '90%',
              height: 45,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderColor: red ? '#EF4444' : '#EAB308',
            }}
            onPress={() => handleOpenPress()}>
            <MonoTextSmall style={{color: 'black'}}>Proceed</MonoTextSmall>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

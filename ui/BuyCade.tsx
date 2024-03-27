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
import BuyCadeGrid from './BuyCadeGrid';
import CadeCardMachine from '../components/CadeCardMachine';
const {height, width} = Dimensions.get('window');

export default function BuyCade({red}: {red: boolean}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const buyCadeData = [
    {
      name: '10x Cade Coins',
      img: require('../assets/images/cadenew.png'),
      price: 1_000_000,
      priceUSDC: 1,
    },
    {
      name: '20x Cade Coins',
      img: require('../assets/images/cp.webp'),
      price: 2_000_000,
      priceUSDC: 2,
    },
    {
      name: '30x Cade Coins',
      img: require('../assets/images/cade.png'),
      price: 3_000_000,
      priceUSDC: 3,
    },
    {
      name: '40x Cade Coins',
      img: require('../assets/images/cadenew.png'),
      price: 4_000_000,
      priceUSDC: 4,
    },
    {
      name: '50x Cade Coins',
      img: require('../assets/images/cp.webp'),
      price: 5_000_000,
      priceUSDC: 5,
    },
    {
      name: '60x Cade Coins',
      img: require('../assets/images/cade.png'),
      price: 6_000_000,
      priceUSDC: 6,
    },
  ];

  const showNextItem = () => {
    if (currentIndex <= buyCadeData.length - 2) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex, buyCadeData.length);
    } else {
      setCurrentIndex(0);
    }
  };

  const showPrevItem = () => {
    if (currentIndex != 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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
        <View className="flex justify-center items-center">
          <CadeCardMachine closeButton={handleClosePress} />
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
            <Animated.View
              style={{
                width: width - 40,
                height: height / 2 + 135,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View className="absolute top-0 mt-10 bg-gray-800 border-4 border-white rounded-md">
                {buyCadeData.map((item, index) => {
                  if (index == currentIndex) {
                    return (
                      <>
                        <Image
                          style={{height: 165, width: 165}}
                          source={item.img}
                        />
                      </>
                    );
                  }
                })}
              </View>
              <View
                className="absolute top-1/2 left-0 translate-x-10  bg-red-500 border-4 border-black"
                style={{height: 100, width: 300}}>
                <View className="absolute top-1/4  bg-blue-500 items-center w-full">
                  <MonoText style={{color: 'white'}}>Buy Cade</MonoText>
                </View>
              </View>
              <View
                className="absolute top-1/4 bg-gray-500 border-4 border-black w-full items-center"
                style={{height: 35, width: 350, marginTop: 110}}>
                <MonoTextSmall>
                  {buyCadeData[currentIndex].name} ~{' '}
                  {buyCadeData[currentIndex].priceUSDC + 'USDC'}
                </MonoTextSmall>
              </View>
            </Animated.View>
          </ImageBackground>
        </View>
        <View style={{zIndex: -10}}>
          <View style={{zIndex: -10}}>
            <BuyCadeGrid
              showNext={showNextItem}
              showPrev={showPrevItem}
              currentItem={buyCadeData[currentIndex]}
            />
          </View>
        </View>
      </View>
    </>
  );
}

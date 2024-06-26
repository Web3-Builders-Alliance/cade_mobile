import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import {useRef, useState} from 'react';
import GameDescription from '../components/GameDescription';
import {MonoTextSmall} from '../components/StylesText';
import CoinFlipImage from '../assets/images/ca44.png';
import FourInLineImage from '../assets/images/ca66.png';
import TowerDefenceImage from '../assets/images/ca11.png';
import SkylineSkaddleImage from '../assets/images/ca33.png';
import MoleSmashImage from '../assets/images/ca22.png';
import TileSurviveImage from '../assets/images/ca55.png';
import Ceiling from '../components/Ceiling';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

export default function MachineSliderWithButtons({
  red,
  showCeiling,
  margin,
}: {
  red: boolean;
  showCeiling: boolean;
  margin: number;
}) {
  const nav = useNavigation();
  const data = [
    {
      img: CoinFlipImage,
      name: 'Coin Flip',
      maker: '@marchedev',
      machineNumber: 4,
      color: 'orange-400',
      gameImage: require('../assets/images/coinflip.jpg'),
      desc: 'A retro coin flip game of digital twist on a classic 50/50 chance.',
    },
    {
      img: FourInLineImage,
      name: 'FourInLine',
      maker: '@marchedev',
      machineNumber: 6,
      color: 'blue-500',
      gameImage: require('../assets/images/sf.png'),
      desc: 'A classic strategy game of aligning four tokens in a row.',
    },
    {
      img: TowerDefenceImage,
      name: 'Tower Defence',
      maker: '@marchedev',
      machineNumber: 1,
      color: 'red-500',
      gameImage: require('../assets/images/tower.jpg'),
      desc: 'Game where the goal is to defend your base by enemy.',
    },
    {
      img: SkylineSkaddleImage,
      name: 'City Stride',
      maker: '@benzonak',
      machineNumber: 3,
      color: 'green-400',
      gameImage: require('../assets/images/skygame.jpg'),
      desc: 'Navigate a vibrant skyline leaping between skyscrapers.',
    },
    {
      img: MoleSmashImage,
      name: 'Rat Splat',
      maker: '@benzonak',
      machineNumber: 2,
      color: 'orange-500',
      gameImage: require('../assets/images/molegame.jpeg'),
      desc: 'Hit every mole with your hammer when it comes out.',
    },
    {
      img: TileSurviveImage,
      name: 'Tile Survive',
      maker: '@benzonak',
      machineNumber: 5,
      color: 'green-400',
      gameImage: require('../assets/images/tile.jpg'),
      desc: 'Luck based game to reach to the end by jumping on the tiles.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  const background_image = require('../assets/images/brickwall.jpg');
  return (
    <>
      {showCeiling ? (
        <>
          <View>
            <Ceiling displayNumber={true} msg={data[currentIndex].name} />
          </View>
        </>
      ) : (
        <></>
      )}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: margin,
        }}>
        <View
          style={{
            height: height / 2 - 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -25,
            zIndex: -10,
          }}>
          <ImageBackground
            style={{flex: 1}}
            borderRadius={5}
            source={background_image}>
            <View className="w-96 items-center">
              {data.map((item, index) => {
                if (index == currentIndex) {
                  return (
                    <>
                      <Image
                        className="mt-14 ml-7"
                        style={{
                          height: 350,
                          width: 350,
                        }}
                        source={item.img}
                      />
                    </>
                  );
                }
              })}
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data.map((item, index) => {
            return (
              <View
                style={{
                  width: currentIndex == index ? 50 : 50,
                  height: currentIndex == index ? 3 : 3,
                  borderRadius: currentIndex == index ? 2 : 2,
                  backgroundColor: currentIndex == index ? 'white' : 'gray',
                  marginLeft: 5,
                  marginTop: 15,
                }}></View>
            );
          })}
        </View>
        <View className="flex justify-center items-center mt-4">
          <GameDescription
            red={red}
            name={data[currentIndex].name}
            img={data[currentIndex].gameImage}
            maker={data[currentIndex].maker}
            desc = {data[currentIndex].desc}
          />
        </View>
        <View
          style={{
            width: width,
            flexDirection: 'row',
            marginTop: 4,
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          {currentIndex == 0 ? null : (
            <TouchableOpacity
              className="border-2"
              style={{
                width: data.length - 1 == currentIndex ? '100%' : 150,
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: red ? '#EF4444' : '#EAB308',
              }}
              onPress={() => {
                setCurrentIndex(currentIndex - 1);
              }}>
              <MonoTextSmall style={{color: 'black'}}>Previous</MonoTextSmall>
            </TouchableOpacity>
          )}
          {data.length - 1 == currentIndex ? null : (
            <TouchableOpacity
              className="border-2"
              style={{
                width: currentIndex == 0 ? '100%' : 150,
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: red ? '#EF4444' : '#EAB308',
              }}
              onPress={() => {
                setCurrentIndex(currentIndex + 1);
              }}>
              <MonoTextSmall style={{color: 'black'}}>Next</MonoTextSmall>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
}

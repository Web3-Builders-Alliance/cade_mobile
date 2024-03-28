import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {MonoText, MonoTextSmall} from './StylesText';
import {useNavigation} from '@react-navigation/native';

const GameDescription = ({red, name, img, maker}) => {
  const nav = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#0F172A',
        height: 185,
        width: 'auto',
        borderColor: red ? '#EF4444' : '#EAB308',
      }}
      className="flex justify-center items-center flex-row w-96 border border-yellow-500 mb-3 rounded-lg">
      <View className="flex flex-col w-2/5 -translate-y-2">
        <View className="h-3/4">
          <Image
            style={{
              width: 100,
              height: 100,
              marginTop: 20,
              marginLeft: 24,
              borderRadius: 10,
            }}
            className="border-2 border-yellow-400"
            source={img}></Image>
        </View>
        <View className="h-1/4 items-center">
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              borderRadius: 4,
              borderColor: 'white',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}
            onPress={() => nav.navigate('GameScreen')}>
            <MonoTextSmall style={{color: 'black'}}>Play</MonoTextSmall>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-3/5 flex flex-col">
        <View className="h-2/5">
          <MonoText style={{color: 'red', textDecorationLine: 'underline'}}>
            {name}
          </MonoText>
        </View>
        <View className="h-2/5">
          <MonoTextSmall style={{color: 'white'}}>
            Lorem Ipsum is simply dummy MonoTextSmall
          </MonoTextSmall>
        </View>
        <View className="h-1/5">
          <MonoTextSmall style={{color: 'white'}}>By- {maker}</MonoTextSmall>
        </View>
      </View>
    </View>
  );
};

export default GameDescription;

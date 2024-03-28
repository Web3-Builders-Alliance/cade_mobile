import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Ceiling from '../components/Ceiling';
import GameMachine from '../ui/GameMachine';
import LightBoard from '../components/LightBoard';
import GameScreenCeiling from '../components/GameScreenCeiling';
import {WebView} from 'react-native-webview';
const GameScreen = () => {
  return (
    <>
      <ScrollView>
        <View className='z-10'>
          <GameScreenCeiling displayNumber={true} msg="GameName" />
        </View>
        <View style={{backgroundColor : "#191414"}}>
          <GameMachine red={false} />
        </View>
      </ScrollView>
    </>
  );
};

export default GameScreen;

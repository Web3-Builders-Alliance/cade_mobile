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
        <View>
          <GameScreenCeiling displayNumber={true} msg="GameName" />
        </View>
        <View>
          <GameMachine red={false} />
        </View>
      </ScrollView>
    </>
  );
};

export default GameScreen;

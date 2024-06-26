import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import {MonoText, MonoTextSmall} from './StylesText';

const formatPublicKey = publicKey => {
  if (!publicKey || typeof publicKey !== 'string') return 'No account';
  const firstFour = publicKey.slice(0, 4);
  const lastFour = publicKey.slice(-4);
  const maskedKey = `${firstFour}...${lastFour}`;
  return maskedKey;
};

const CadeCard = ({account}) => {
  const publicKey = account ? formatPublicKey(account) : '';

  const background_image = require('../assets/images/ig2.png');

  return (
    <View className="flex">
      <View
        style={{height: 160, width: 380}}
        className="relative border-4 border-white rounded-t-2xl ml-10 mr-10 mt-4">
        <ImageBackground
          style={{flex: 1}}
          source={background_image}
          borderRadius={15}
          resizeMode="cover">
          <View className="flex justify-center flex-row">
            <View className="absolute left-0 mt-3 ml-5">
              <View className="flex items-center">
                <Image
                  source={require('../assets/images/cadenew.png')}
                  className="w-12 h-12 rounded-full border border-white"
                />
              </View>
            </View>
            <View className="absolute right-0 mt-3 mr-5">
              {/* <MonoTextSmall>444n5....q5S</MonoTextSmall> */}
              <MonoTextSmall>{publicKey}</MonoTextSmall>
            </View>
          </View>
          <View className="absolute left-0 top-1/2 translate-y-5 ml-5">
            <MonoTextSmall style={{textDecorationLine: 'underline'}}>
              Bryant
            </MonoTextSmall>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default CadeCard;

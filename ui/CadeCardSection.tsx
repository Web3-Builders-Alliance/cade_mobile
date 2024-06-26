import {View, Text, Image, TouchableOpacity} from 'react-native';
import {MonoText, MonoTextSmall} from '../components/StylesText';
import React from 'react';
import CadeCard from '../components/CadeCard';
import ButtonGrid from './ButtonGrid';
import LoginButton from './LogicButton';

const CadeCardSection = ({account}) => {
  return (
    <View style={{backgroundColor: '#191414'}} className="h-64 w-max">
      <View className="flex flex-row justify-between items-left ">
        <MonoText>Welcome Bryant</MonoText>
        {/* <View style={{ flex: 1 }}>
          <LoginButton />
        </View> */}
      </View>
      <ButtonGrid />
      <View className="flex justify-center items-center">
        <CadeCard account={account} />
      </View>
    </View>
  );
};

export default CadeCardSection;

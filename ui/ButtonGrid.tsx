import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {MonoTextSmall} from '../components/StylesText';
import { useNavigation } from '@react-navigation/native';
const ButtonGrid = () => {
  const nav = useNavigation()
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 15,
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 12,
        paddingLeft: 12,
      }}>
      <TouchableOpacity
        className="border-2 border-yellow-400"
        style={{
          width: '30%',
          height: 44,
          borderRadius: 7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <MonoTextSmall style={{textAlign: 'center', color: 'black'}}>
          Redeem
        </MonoTextSmall>
      </TouchableOpacity>
      <TouchableOpacity
        className="border-2 border-yellow-400"
        style={{
          width: '30%',
          height: 44,
          borderRadius: 7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <MonoTextSmall style={{textAlign: 'center', color: 'black'}}>
          GamePass
        </MonoTextSmall>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => nav.navigate('LoginScreen')}
        className="border-2 border-yellow-400"
        style={{
          width: '30%',
          height: 44,
          borderRadius: 7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <MonoTextSmall style={{textAlign: 'center', color: 'black'}}>
          Login
        </MonoTextSmall>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGrid;

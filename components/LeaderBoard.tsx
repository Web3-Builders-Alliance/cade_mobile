import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {MonoText, MonoTextSmall} from './StylesText';

const LeaderBoard = ({red}: {red: boolean}) => {
  const styles = {
    text: {
      color: 'white', // Set text color to white
    },
  };

  return (
    <View
      style={{
        backgroundColor: '#0F172A',
        height: 200,
        width: 'auto',
        marginTop: 15,
        borderColor: red ? '#EF4444' : '#EAB308',
      }}
      className="flex-row w-96 border-4 border-yellow-500 mb-3 rounded-lg">
      <View className="flex flex-col">
        <View className="flex justify-center flex-row mt-2">
          <View className="w-1/3 items-center">
            <MonoTextSmall
              style={{textDecorationLine: 'underline', color: 'white'}}>
              Sno
            </MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall
              style={{textDecorationLine: 'underline', color: 'white'}}>
              PlayerName
            </MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall
              style={{textDecorationLine: 'underline', color: 'white'}}>
              Points
            </MonoTextSmall>
          </View>
        </View>
        <View className="flex justify-center flex-row mt-5">
          <View className="w-1/3 items-center">
            <MonoTextSmall style={styles.text}>1</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall style={styles.text}>Jack</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall style={styles.text}>500</MonoTextSmall>
          </View>
        </View>
        <View className="flex justify-center flex-row mt-5">
          <View className="w-1/3 items-center">
            <MonoTextSmall style={styles.text}>2</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall style={styles.text}>Emily</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall style={styles.text}>200</MonoTextSmall>
          </View>
        </View>
        <View className="flex justify-center flex-row mt-5">
          <View className="w-1/3 items-center">
            <MonoTextSmall style={styles.text}>3</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall style={styles.text}>Michael</MonoTextSmall>
          </View>
          <View className="w-1/3 items-center">
            <MonoTextSmall style={styles.text}>100</MonoTextSmall>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LeaderBoard;

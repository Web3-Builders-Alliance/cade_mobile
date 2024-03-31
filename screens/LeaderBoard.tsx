import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MonoTextSmall} from '../components/StylesText';

const LeaderBoard = () => {
  return (
    <>
      <View style={{backgroundColor: '#191414'}} className="min-h-screen">
        <View className="flex justify-center gap-x-5 flex-row">
          <Text
            style={{
              fontFamily: 'VT323-Regular',
              fontSize: 28,
              color: 'yellow',
              textDecorationLine: 'underline',
            }}>
            Publish.
          </Text>
          <Text
            style={{
              fontFamily: 'VT323-Regular',
              fontSize: 28,
              color: 'yellow',
              textDecorationLine: 'underline',
            }}>
            Distribute.
          </Text>
          <Text
            style={{
              fontFamily: 'VT323-Regular',
              fontSize: 28,
              color: 'yellow',
              textDecorationLine: 'underline',
            }}>
            Earn.
          </Text>
        </View>
        <View className="flex flex-row justify-between mt-8 px-5">
          <View>
            <Image
              source={require('../assets/images/drip5.gif')}
              style={{width: 150, height: 150, borderRadius: 100}}
            />
          </View>
          <View className="flex justify-center flex-col items-center">
            <Text style={{fontFamily: 'VT323-Regular', fontSize: 24}}>
              Name - GameDevName
            </Text>
            <Text style={{fontFamily: 'VT323-Regular', fontSize: 24}}>
              Games Published - 1
            </Text>
          </View>
        </View>
        <View className="flex flex-row gap-x-5 justify-center items-center">
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 44}}>
            Redeem
          </Text>
          <Text
            style={{
              fontFamily: 'VT323-Regular',
              fontSize: 90,
              color: 'yellow',
            }}>
            0
          </Text>
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 44}}>Cade</Text>
        </View>
        <View className="flex flex-row justify-center gap-x-3 items-center">
          <TouchableOpacity>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                10%
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                30%
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                60%
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                90%
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                100%
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center mt-5">
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 30}}>
            Recieve 👇
          </Text>
        </View>
        <View className="flex flex-row gap-x-5 justify-center items-center">
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 100}}>0</Text>
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 100}}>USDC</Text>
        </View>
        <View className="items-center mt-16">
          <TouchableOpacity
            className="border-2"
            style={{
              width: '80%',
              height: 50,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderColor: '#EAB308',
            }}>
            <MonoTextSmall style={{color: 'black'}}>Redeem</MonoTextSmall>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LeaderBoard;

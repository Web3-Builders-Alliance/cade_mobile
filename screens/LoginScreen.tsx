import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LoginAccount from '../ui/LogicAccount';
import {ScrollView} from 'react-native';
import LeftCeiling from '../components/LeftCeiling';

const LoginScreen = () => {
  return (
    <>
      <View style={{backgroundColor: '#191414'}} className="min-h-screen py-12">
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View className="container px-4 md:px-6">
            <View>
              <LeftCeiling blue={false} msg={'Prize Center'} />
              <View className="relative mt-36">
                <LoginAccount />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default LoginScreen;

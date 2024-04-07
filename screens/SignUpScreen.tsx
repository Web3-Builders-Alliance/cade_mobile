import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {MonoText} from '../components/StylesText';
import Icon from 'react-native-vector-icons/Fontisto';

const SignUpScreen = () => {
  const handleTwitterClick = () => {
    const twitterUrl = 'https://twitter.com/gg_cade';
    Linking.openURL(twitterUrl);
  };

  const handleDiscordClick = () => {
    const discordUrl = 'https://discord.gg/E9jmhGEuUa';
    Linking.openURL(discordUrl);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#191414',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '30%',
          }}>
          <View style={{width: '80%', alignItems: 'center', marginBottom: 20}}>
            <MonoText style={{textAlign: 'center', marginBottom: 20}}>
              Exciting updates are on the horizon! Stay tuned and follow us to
              be the first to know.
            </MonoText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={handleTwitterClick}
              style={{marginRight: 40}}>
              <Icon name="twitter" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDiscordClick}>
              <Icon name="discord" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignUpScreen;

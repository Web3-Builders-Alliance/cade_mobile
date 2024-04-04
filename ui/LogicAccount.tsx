import {
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Alert,
  Button,
  ScrollView,
} from 'react-native';
import React, {useRef, useCallback, useMemo, useEffect, useState} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {MonoText, MonoTextSmall} from '../components/StylesText';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const LoginAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigation();

  //current all clickable leads back to homescreen
  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login Successful');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          className="border-2 mt-5"
          style={{
            width: '80%',
            height: 45,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'gray',
            fontFamily: 'VT323-Regular',
            borderColor: 'white',
            fontSize: 20,
            paddingLeft: 10,
          }}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="Enter Username"
          autoCapitalize="none"
        />
        <TextInput
          className="border-2 mt-5"
          style={{
            width: '80%',
            height: 45,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'gray',
            borderColor: 'white',
            fontFamily: 'VT323-Regular',
            fontSize: 20,
            paddingLeft: 10,
          }}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Enter Password"
          secureTextEntry
        />

        <TouchableOpacity
          className="border-2 mt-8"
          style={{
            width: '60%',
            height: 45,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
          onPress={() => nav.navigate('Home')}>
          <MonoTextSmall style={{color: 'black'}}>Sign In</MonoTextSmall>
        </TouchableOpacity>
        <TouchableOpacity
          className="mt-2"
          style={{
            width: '60%',
            height: 45,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => nav.navigate('Home')}>
          <MonoTextSmall
            style={{color: 'white', textDecorationLine: 'underline'}}>
            Forgot Password?
          </MonoTextSmall>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Home')} className="mt-5">
          <MonoTextSmall style={{textDecorationLine: 'underline'}}>
            Skip for now
          </MonoTextSmall>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 40}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
          <MonoTextSmall style={{marginHorizontal: 10, color: 'white'}}>
            Or Continue With
          </MonoTextSmall>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
            }}>
            <TouchableOpacity onPress={() => nav.navigate('Home')}>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../assets/images/googleicon.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate('Home')}>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../assets/images/phantomicon.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate('Home')}>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../assets/images/appleicon.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginAccount;

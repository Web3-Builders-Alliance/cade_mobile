import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Button,
  Dimensions,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import WebView from 'react-native-webview';
import Orientation, {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';
import {MonoTextSmall} from '../components/StylesText';

const Play = () => {
  const ff = false;
  const navigation = useNavigation();
  useEffect(() => {
    const back = navigation.addListener('beforeRemove', e => {
      Orientation.lockToPortrait();
    });
    return back;
  }, [navigation]);

  const changeScreenOr = () => {
    Orientation.lockToLandscape();
  };

  const [play, setPlay] = useState(false);

  const playNow = () => {
    changeScreenOr();
    setTimeout(() => {
      setPlay(true);
    }, 1000);
  };

  return (
    <>
      {play ? (
        <>
          <ScrollView>
            <View
              style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
              }}>
              <WebView
                source={{
                  uri: 'https://659955b6f50dbf90d203c2de--meek-manatee-6d37fc.netlify.app/',
                }}
                style={{marginTop: 0}}
              />
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <View
            style={{backgroundColor: '#191414'}}
            className="min-h-screen flex justify-center text-black items-center">
            <View className="items-center">
              <Image
                source={require('../assets/images/skygame.jpg')}
                style={{width: 400, height: 400}}
              />
            </View>
            <View style={{width: '90%'}} className="mt-10 items-center">
              <TouchableOpacity
                className="border-2 mt-5"
                style={{
                  width: '90%',
                  height: 45,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderColor: 'yellow',
                }}
                onPress={() => playNow()}>
                <MonoTextSmall style={{color: 'black'}}>Play</MonoTextSmall>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default Play;

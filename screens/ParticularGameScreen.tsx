import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Button,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import Orientation, {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';
const ParticularGameScreen = () => {
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
                  uri: 'https://659954a22f4c4ed2eae1abd7--voluble-gingersnap-b006a8.netlify.app/',
                }}
                style={{marginTop: 0}}
              />
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <View style={{backgroundColor:"#191414"}} className='min-h-screen flex justify-center text-black p-10'>
            <Button color={"gray"} onPress={() => playNow()} title="Play Now"/>
          </View>
        </>
      )}
    </>
  );
};

export default ParticularGameScreen;

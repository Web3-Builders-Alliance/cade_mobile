import React from 'react';
import {Dimensions, View} from 'react-native';
import WebView from 'react-native-webview';

const ParticularGameScreen = () => {
  return (
    <>
      <View
        style={{
          zIndex: -1,
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          backgroundColor : '#191414'
        }}>
        <WebView
          source={{
            uri: 'https://659954a22f4c4ed2eae1abd7--voluble-gingersnap-b006a8.netlify.app/',
          }}
          style={{marginTop: 20, zIndex: 1}}
        />
      </View>
    </>
  );
};

export default ParticularGameScreen;

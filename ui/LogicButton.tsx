import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {MonoTextSmall} from '../components/StylesText';
//import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const LoginButton = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate('LoginScreen'); // Navigate back to the previous screen (LoginScreen)
  };
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
      {/* <Link href="../screens/HomeScreen" asChild> */}
      <Pressable onPress={handleLoginPress}>
        <MonoTextSmall
          style={{
            textAlign: 'center',
            color: '#007AFF',
            fontSize: 30,
            textDecorationLine: 'underline',
            marginRight: 50,
          }}>
          login
        </MonoTextSmall>
      </Pressable>
      {/* </Link> */}
    </View>
  );
};

export default LoginButton;

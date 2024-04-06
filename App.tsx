import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Button,
  Alert,
  BackHandler,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import PrizeScreen from './screens/PrizeScreen';
import BuyCadeScreen from './screens/BuyCadeScreen';
import GameScreen from './screens/GameScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider, Layout} from '@ui-kitten/components';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from './screens/LoginScreen';
import {clusterApiUrl} from '@solana/web3.js';
import {ConnectionProvider} from './components/providers/ConnectionProvider';
import {AuthorizationProvider} from './components/providers/AuthorizationProvider';
import BottomSheet from './components/BottomSheet';
import {MonoText, MonoTextSmall} from './components/StylesText';
import RedeemCade from './screens/RedeemCade';
import {createStackNavigator} from '@react-navigation/stack';
import Play from './screens/Play';
import SignUpScreen from './screens/SignUpScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function App(): React.JSX.Element {
  const background_image = require('./assets/images/ig2.png');
  const isDarkMode = useColorScheme() === 'dark';
  const DEVNET_ENDPOINT = clusterApiUrl('devnet');
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <BottomSheet visible={bottomSheetVisible} onClose={closeBottomSheet}>
        <ScrollView nestedScrollEnabled={true}>
          <View>
            <MonoText style={{textDecorationLine: 'underline'}}>
              CadeCard #132
            </MonoText>
          </View>
          <View className="mt-2">
            <Text
              style={{
                color: 'white',
                fontFamily: 'VT323-Regular',
                fontSize: 22,
              }}>
              Card Type : Premium
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'VT323-Regular',
                fontSize: 22,
              }}>
              Cade Balance : 100
            </Text>
          </View>
          <View
            className="relative"
            style={{
              width: '100%',
              height: 230,
              backgroundColor: 'gray',
              marginTop: 20,
              borderRadius: 7,
              borderColor: 'white',
              borderWidth: 2,
            }}>
            <ImageBackground
              style={{flex: 1}}
              borderRadius={5}
              source={background_image}>
              <View className="absolute top-0 left-0 ml-5 mt-5">
                <Image
                  source={require('./assets/images/cadenew.png')}
                  className="w-12 h-12 rounded-full border border-white"
                />
              </View>
              <View className="absolute right-0 top-0 mr-5 mt-5">
                <MonoTextSmall>44n5....q5S</MonoTextSmall>
              </View>
              <View className="absolute bottom-0 left-0 ml-5 mb-5">
                <MonoText style={{textDecorationLine: 'underline'}}>
                  Bryant
                  <MonoText></MonoText>
                </MonoText>
              </View>
            </ImageBackground>
          </View>
          <View className="items-center mt-5">
            {/* <Link href={"/(tabs)/BuyCade"}> */}
            <TouchableOpacity
              className="border-2"
              style={{
                width: '90%',
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: 'yellow',
              }}
              onPress={() => closeBottomSheet()}>
              <MonoTextSmall style={{color: 'black'}}>
                Refil Cade{' '}
                <MaterialCommunityIcons
                  name="gas-station"
                  size={24}
                  color="black"
                />
              </MonoTextSmall>
            </TouchableOpacity>
            {/* </Link> */}
          </View>
          <View className="items-center mt-5">
            <TouchableOpacity
              className="border-2"
              style={{
                width: '90%',
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: 'yellow',
              }}
              onPress={() => closeBottomSheet()}>
              <MonoTextSmall style={{color: 'black'}}>Close</MonoTextSmall>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BottomSheet>

      <ConnectionProvider
        config={{commitment: 'processed'}}
        endpoint={DEVNET_ENDPOINT}>
        <AuthorizationProvider>
          <NavigationContainer>
            <GestureHandlerRootView style={{flex: 1}}>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name="Home"
                  component={StackScreens}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    headerTintColor: 'white',
                    headerStyle: {
                      backgroundColor: '#191414',
                    },
                    headerTitleStyle: {
                      fontFamily: 'VT323-Regular',
                      fontSize: 28,
                    },
                  }}
                  name="GameScreen"
                  component={GameScreen}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    headerTintColor: 'white',
                    headerStyle: {
                      backgroundColor: '#191414',
                    },
                    headerTitleStyle: {
                      fontFamily: 'VT323-Regular',
                      fontSize: 28,
                    },
                  }}
                  name="LoginScreen"
                  component={LoginScreen}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    headerTintColor: 'white',
                    headerStyle: {
                      backgroundColor: '#191414',
                    },
                    headerTitleStyle: {
                      fontFamily: 'VT323-Regular',
                      fontSize: 28,
                    },
                  }}
                  name="Play"
                  component={Play}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    headerTintColor: 'white',
                    headerStyle: {
                      backgroundColor: '#191414',
                    },
                    headerTitleStyle: {
                      fontFamily: 'VT323-Regular',
                      fontSize: 28,
                    },
                  }}
                  name="SignUpScreen"
                  component={SignUpScreen}
                />
              </Stack.Navigator>
            </GestureHandlerRootView>
          </NavigationContainer>
        </AuthorizationProvider>
      </ConnectionProvider>
    </>
  );

  function StackScreens() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            backgroundColor: '#191414',
          },
          tabBarActiveTintColor: 'yellow',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size, focused}) => {
              return (
                <>
                  <FontAwesome6
                    name="gamepad"
                    size={size}
                    color={focused ? 'white' : 'gray'}
                  />
                  <Text style={{fontFamily: 'VT323-Regular', fontSize: 16}}>
                    Arcade
                  </Text>
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="Prize"
          component={PrizeScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#191414',
            },
            headerTitleStyle: {
              fontFamily: 'VT323-Regular',
              fontSize: 28,
            },
            tabBarLabel: 'Prize',
            tabBarIcon: ({color, size, focused}) => {
              return (
                <>
                  <AntDesign
                    name="gift"
                    size={size}
                    color={focused ? 'white' : 'gray'}
                  />
                  <Text style={{fontFamily: 'VT323-Regular', fontSize: 16}}>
                    Prizes
                  </Text>
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="CadeCard"
          component={HomeScreen}
          options={{
            title: 'Card',
            tabBarIcon: ({color, size, focused}) => (
              <>
                <FontAwesome
                  name="credit-card"
                  color={focused ? 'white' : 'gray'}
                  size={size}
                />
                <Text style={{fontFamily: 'VT323-Regular', fontSize: 16}}>
                  CadeCard
                </Text>
              </>
            ),
          }}
          listeners={() => ({
            tabPress: e => {
              e.preventDefault();
              console.log('Herers');
              openBottomSheet();
            },
          })}
        />
        <Tab.Screen
          name="BuyCade"
          component={BuyCadeScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#191414',
            },
            headerTitleStyle: {
              fontFamily: 'VT323-Regular',
              fontSize: 28,
            },
            tabBarLabel: 'BuyCade',
            tabBarIcon: ({color, size, focused}) => {
              return (
                <>
                  <FontAwesome
                    name="dollar"
                    size={size}
                    color={focused ? 'white' : 'gray'}
                  />
                  <Text style={{fontFamily: 'VT323-Regular', fontSize: 16}}>
                    BuyCade
                  </Text>
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="RedeemCade"
          component={RedeemCade}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#191414',
            },
            headerTitleStyle: {
              fontFamily: 'VT323-Regular',
              fontSize: 28,
            },
            tabBarIcon: ({color, size, focused}) => {
              return (
                <>
                  <MaterialIcons
                    name="redeem"
                    size={size}
                    color={focused ? 'white' : 'gray'}
                  />
                  <Text style={{fontFamily: 'VT323-Regular', fontSize: 16}}>
                    RedeemCade
                  </Text>
                </>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default App;

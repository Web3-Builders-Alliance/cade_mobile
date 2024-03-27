import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {ApplicationProvider, Layout} from '@ui-kitten/components';
import {Button, Icon} from '@ui-kitten/components';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './screens/LoginScreen';
import {clusterApiUrl} from '@solana/web3.js';
import {ConnectionProvider} from './components/providers/ConnectionProvider';
import {AuthorizationProvider} from './components/providers/AuthorizationProvider';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const DEVNET_ENDPOINT = clusterApiUrl('devnet');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ConnectionProvider
      config={{commitment: 'processed'}}
      endpoint={DEVNET_ENDPOINT}>
      <AuthorizationProvider>
        <NavigationContainer>
          <GestureHandlerRootView style={{flex: 1}}>
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
                        <Fontisto
                          name="home"
                          size={size}
                          color={focused ? 'white' : 'gray'}
                        />
                        <Text
                          style={{fontFamily: 'VT323-Regular', fontSize: 16}}>
                          Home
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
                  tabBarLabel: 'Prize',
                  tabBarIcon: ({color, size, focused}) => {
                    return (
                      <>
                        <AntDesign
                          name="gift"
                          size={size}
                          color={focused ? 'white' : 'gray'}
                        />
                        <Text
                          style={{fontFamily: 'VT323-Regular', fontSize: 16}}>
                          Prizes
                        </Text>
                      </>
                    );
                  },
                }}
              />
              <Tab.Screen
                name="BuyCade"
                component={BuyCadeScreen}
                options={{
                  tabBarLabel: 'BuyCade',
                  tabBarIcon: ({color, size, focused}) => {
                    return (
                      <>
                        <FontAwesome
                          name="dollar"
                          size={size}
                          color={focused ? 'white' : 'gray'}
                        />
                        <Text
                          style={{fontFamily: 'VT323-Regular', fontSize: 16}}>
                          BuyCade
                        </Text>
                      </>
                    );
                  },
                }}
              />
            </Tab.Navigator>
          </GestureHandlerRootView>
        </NavigationContainer>
      </AuthorizationProvider>
    </ConnectionProvider>
  );
}

export default App;

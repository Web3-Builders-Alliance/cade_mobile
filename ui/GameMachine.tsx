import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import GameLightBoard from '../components/GameLightBoard';
import {MonoText, MonoTextSmall} from '../components/StylesText';
import GameDescription from '../components/GameDescription';
import LeaderBoard from '../components/LeaderBoard';
import {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import CadeCardMachine from '../components/CadeCardMachine';
// import ConnectButton from "../Utils/ConnectButton";
// import {useMobileWallet} from '../Utils/useMobileWallet'
import {useNavigation} from '@react-navigation/native';
import {
  Account,
  useAuthorization,
} from '../components/providers/AuthorizationProvider';
import {useAnchorWallet} from '../hooks/useAnchorWallet';
import {useConnection} from '../components/providers/ConnectionProvider';
import CallPayForGame from '../components/CallInstruction/CallPayForGame';
import ConnectButton from '../components/SMSComponents/ConnectButton';
const {height, width} = Dimensions.get('window');

export default function GameMachine({red}: {red: boolean}) {
  const nav = useNavigation();
  const {connection} = useConnection();
  const [publicKey, setPublickey] = useState<any>();
  const {selectedAccount, authorizeSession} = useAuthorization();
  const anchorWallet = useAnchorWallet(authorizeSession, selectedAccount);
  const fetchAndUpdateBalance = useCallback(
    async (account: Account) => {
      console.log('Fetching balance for: ' + account.publicKey);
      setPublickey(account.publicKey);
    },
    [connection],
  );

  useEffect(() => {
    if (!selectedAccount) {
      return;
    }
    fetchAndUpdateBalance(selectedAccount);
  }, [fetchAndUpdateBalance, selectedAccount]);
  const background_image = require('../assets/images/brickwall.jpg');
  const [showBackDrop, setShowBackDrop] = useState(false);
  const snapPoints = useMemo(() => ['25%', '80%', '70%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = () => {
    setShowBackDrop(true);
    bottomSheetRef.current?.expand();
  };

  const handleClosePress = () => {
    setShowBackDrop(true);
    bottomSheetRef.current?.close();
  };

  const renderBackdrop = useCallback(
    (prop: any) =>
      showBackDrop ? (
        <BottomSheetBackdrop
          //appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...prop}
        />
      ) : null,
    [showBackDrop],
  );

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          zIndex: -10,
        }}>
        <View
          style={{
            height: height / 2 + 220,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 0,
            zIndex: -10,
          }}>
          <ImageBackground
            style={{flex: 1}}
            borderRadius={5}
            source={background_image}>
            <View className="flex justify-center items-center mr-2">
              <GameLightBoard />
            </View>
            <View
              style={{
                width: width - 10,
                height: height / 2 - 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                className="mt-14"
                style={{
                  height: 350,
                  width: 350,
                }}
                source={require('../assets/images/ca11.png')}
              />
            </View>
          </ImageBackground>
        </View>
        <View className='w-full'>
          {publicKey ? (
            <>
            <CallPayForGame
            anchorWallet={anchorWallet}
            onComplete={() => console.log('DONE')}
          />
            </>
          ):(
            <>
            <View className='mt-2'>
            <ConnectButton title='Connect Wallet' />
            </View>
            </>
          )}
          
        </View>
        <View className="mt-5">
          <GameDescription
            red={false}
            name={'Tower Defence'}
            img={require('../assets/images/tower.jpg')}
            maker={'@marchedev'}
          />
        </View>
        <View className="mt-5">
          <View>
            <MonoText style={{textDecorationLine: 'underline'}}>
              LeaderBoard
            </MonoText>
          </View>
          <LeaderBoard red={false} />
        </View>
        {/* <View>
          <ConnectButton title="Connect"/>
        </View> */}
      </View>
    </>
  );
}

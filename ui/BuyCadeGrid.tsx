import React, {useCallback, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {MonoTextSmall} from '../components/StylesText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Account,
  useAuthorization,
} from '../components/providers/AuthorizationProvider';
import {useConnection} from '../components/providers/ConnectionProvider';
import {useAnchorWallet} from '../hooks/useAnchorWallet';
import CallSwapIns from '../components/CallInstruction/CallSwapIns';
import ConnectButton from '../components/SMSComponents/ConnectButton';

const BuyCadeGrid = ({showNext, showPrev, currentItem}) => {
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

  const Grid = () => {
    return (
      <>
        <View
          style={{height: 230, borderColor: 'white', borderWidth: 5}}
          className="relative w-full bg-slate-700 mt-5 items-center rounded-xl">
          <View>
            <Text
              style={{
                fontFamily: 'VT323-Regular',
                fontSize: 24,
                color: 'white',
              }}>
              Buy Cade Machine
            </Text>
          </View>
          <View
            style={{
              height: 100,
              width: '90%',
              borderColor: 'white',
              borderWidth: 3,
            }}
            className="absolute bg-blue-600 mt-10 rounded-lg items-center">
            <View className="mt-1 flex flex-row gap-x-3">
              <FontAwesome name="battery-3" size={12} color={'white'} />
              <FontAwesome5 name="wifi" size={12} color={'white'} />
            </View>
            <View
              style={{width: '90%'}}
              className="absolute top-1/4 flex flex-row justify-between">
              <View className="">
                <Text
                  style={{
                    fontFamily: 'VT323-Regular',
                    fontSize: 22,
                    color: 'white',
                  }}>
                  URL:
                  <Text style={{backgroundColor: 'black', color: 'yellow'}}>
                    Devnet
                  </Text>
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'VT323-Regular',
                    fontSize: 22,
                    color: 'white',
                  }}>
                  Method:
                  <Text style={{backgroundColor: 'black', color: 'yellow'}}>
                    USDC
                  </Text>
                </Text>
              </View>
            </View>
            <View className="absolute h-max bottom-0">
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    fontFamily: 'VT323-Regular',
                    color: 'white',
                    marginTop: 5,
                  }}>
                  {currentItem.name}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{height: 80, width: '100%'}}
            className="absolute bottom-0  flex flex-row items-center">
            <View
              style={{height: 40}}
              className="w-1/5 bg-transparent flex justify-center items-center">
              <TouchableOpacity
                className="border-2"
                style={{
                  height: 50,
                  width: '80%',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderColor: 'red',
                }}
                onPress={showPrev}>
                <MonoTextSmall style={{color: 'black'}}>{'<'}</MonoTextSmall>
              </TouchableOpacity>
            </View>
            <View className="flex justify-center w-3/5 bg-transparent">
              {publicKey ? (
                <CallSwapIns
                  anchorWallet={anchorWallet}
                  onComplete={() => console.log('com')}
                  name={currentItem.name}
                  price={currentItem.priceUSDC}
                />
              ) : (
                <ConnectButton title="Connect" />
              )}
            </View>
            <View
              style={{height: 40}}
              className="flex bg-transparent justify-center w-1/5 items-center">
              <TouchableOpacity
                className="border-2"
                style={{
                  height: 50,
                  width: '80%',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderColor: 'red',
                }}
                onPress={showNext}>
                <MonoTextSmall style={{color: 'black'}}>{'>'}</MonoTextSmall>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <View className="flex justify-center items-center">{Grid()}</View>
    </>
  );
};

export default BuyCadeGrid;

import React, {useCallback, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MonoTextSmall} from '../components/StylesText';
import RedeemUSDC from '../components/CallInstruction/RedeemUSDC';
import {useConnection} from '../components/providers/ConnectionProvider';
import {useAnchorWallet} from '../hooks/useAnchorWallet';
import {
  Account,
  useAuthorization,
} from '../components/providers/AuthorizationProvider';
import ConnectButton from '../components/SMSComponents/ConnectButton';

const LeaderBoard = () => {
  //
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
  //
  const [cade, setCade] = useState(100);
  const [redeemingCadeAmount, setRedeemingCadeAmount] = useState(0);
  const [recievingUSDCAmount, setRecievingAmount] = useState(0);
  const getUSDCForCade = (percentage: number) => {
    let usdcAmount = ((percentage / 100) * cade) / 10;
    let cadeAmount = (percentage / 100) * cade;
    setRedeemingCadeAmount(cadeAmount);
    setRecievingAmount(usdcAmount);
  };
  return (
    <>
      <View style={{backgroundColor: '#191414'}} className="min-h-screen">
        <View className="flex justify-center gap-x-5 flex-row">
          <Text
            style={{
              fontFamily: 'VT323-Regular',
              fontSize: 28,
              color: 'white',
              textDecorationLine: 'underline',
            }}>
            Publish.
          </Text>
          <Text
            style={{
              fontFamily: 'VT323-Regular',
              fontSize: 28,
              color: 'yellow',
              textDecorationLine: 'underline',
            }}>
            Distribute.
          </Text>
          <Text
            style={{
              fontFamily: 'VT323-Regular',
              fontSize: 28,
              color: 'white',
              textDecorationLine: 'underline',
            }}>
            Earn.
          </Text>
        </View>
        <View className="flex flex-row justify-between mt-8 px-5">
          <View>
            <Image
              source={require('../assets/images/drip5.gif')}
              style={{width: 150, height: 150, borderRadius: 100}}
            />
          </View>
          <View className="flex justify-center flex-col items-center">
            <Text style={{fontFamily: 'VT323-Regular', fontSize: 24}}>
              Name - GameDevName
            </Text>
            <Text style={{fontFamily: 'VT323-Regular', fontSize: 24}}>
              Games Published - 1
            </Text>
            <Text style={{fontFamily: 'VT323-Regular', fontSize: 24}}>
              Cade Balance - 100
            </Text>
          </View>
        </View>
        <View className="flex flex-row gap-x-5 justify-center items-center">
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 44}}>
            Redeem
          </Text>
          <Text
            style={{
              fontFamily: 'VT323-Regular',
              fontSize: 90,
              color: 'yellow',
            }}>
            {redeemingCadeAmount}
          </Text>
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 44}}>Cade</Text>
        </View>
        <View className="flex flex-row justify-center gap-x-3 items-center">
          <TouchableOpacity onPress={() => getUSDCForCade(10)}>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                10%
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getUSDCForCade(30)}>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                30%
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getUSDCForCade(60)}>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                60%
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getUSDCForCade(90)}>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                90%
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getUSDCForCade(100)}>
            <View className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <Text style={{fontFamily: 'VT323-Regular', fontSize: 25}}>
                100%
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center mt-5">
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 30}}>
            Recieve 👇
          </Text>
        </View>
        <View className="flex flex-row gap-x-5 justify-center items-center">
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 100}}>
            {recievingUSDCAmount}
          </Text>
          <Text style={{fontFamily: 'VT323-Regular', fontSize: 100}}>USDC</Text>
        </View>
        <View className="items-center mt-16">
          {publicKey ? (
            <>
              <RedeemUSDC
                anchorWallet={anchorWallet}
                onComplete={() => console.log('DONE')}
              />
            </>
          ) : (
            <>
              <View style={{width: '80%'}}>
                <ConnectButton title="Connect Wallet" />
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default LeaderBoard;

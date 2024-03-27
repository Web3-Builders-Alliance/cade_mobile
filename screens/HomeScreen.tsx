import {View, Text, ScrollView, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Ceiling from '../components/Ceiling';
import MachineSliderWithButtons from '../ui/MachineSliderWithButtons';
import CadeCardSection from '../ui/CadeCardSection';
import Discover from '../ui/Discover';
import GameSection from '../ui/GameSection';
import PrizeScreen from './PrizeScreen';
import {
  Account,
  useAuthorization,
} from '../components/providers/AuthorizationProvider';
import {useConnection} from '../components/providers/ConnectionProvider';
import {PublicKey} from '@solana/web3.js';
import ConnectButton from '../components/SMSComponents/ConnectButton';
const HomeScreen = () => {
  const {connection} = useConnection();
  const [balance, setBalance] = useState<number | null>(null);
  const [publicKey, setPublickey] = useState<PublicKey | null>(null);
  const {selectedAccount} = useAuthorization();
  const fetchAndUpdateBalance = useCallback(
    async (account: Account) => {
      console.log('Fetching balance for: ' + account.publicKey);
      setPublickey(account.publicKey);
      const fetchedBalance = await connection.getBalance(account.publicKey);
      console.log('Balance fetched: ' + fetchedBalance);
      setBalance(fetchedBalance);
    },
    [connection],
  );
  useEffect(() => {
    if (!selectedAccount) {
      return;
    }
    fetchAndUpdateBalance(selectedAccount);
  }, [fetchAndUpdateBalance, selectedAccount]);
  return (
    <View style={{backgroundColor: '#191414'}} className="min-h-screen py-3">
      {/* <Text>{publicKey ? balance : 'NotConnected'}</Text>
      <Text>{publicKey ? publicKey.toString() : 'NotConnected(p)'}</Text> */}
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="container px-4 md:px-6 mb-16">
          <View>
            <CadeCardSection />
            {/* <ConnectButton title="Connect wallet" /> */}
            <Ceiling displayNumber={true} msg={'Tower Defence'} />
            <View className="mt-36">
              <MachineSliderWithButtons red={false} />
            </View>
            <View>
              <Discover />
            </View>
            <View>
              <GameSection />
              {/* <PrizeScreen/> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

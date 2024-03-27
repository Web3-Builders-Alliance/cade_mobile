import {View, Text, ScrollView, Alert, Button} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Ceiling from '../components/Ceiling';
import MachineSliderWithButtons from '../ui/MachineSliderWithButtons';
import CadeCardSection from '../ui/CadeCardSection';
import Discover from '../ui/Discover';
import {Program} from '@coral-xyz/anchor';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
  getOrCreateAssociatedTokenAccount,
} from '@solana/spl-token';
import {BN} from '@coral-xyz/anchor';
import GameSection from '../ui/GameSection';
import * as anchor from '@coral-xyz/anchor';
import idl from '../constants/economy/economy.json';
import {
  Account,
  useAuthorization,
} from '../components/providers/AuthorizationProvider';
import {useConnection} from '../components/providers/ConnectionProvider';
import {PublicKey, SystemProgram} from '@solana/web3.js';
import ConnectButton from '../components/SMSComponents/ConnectButton';
import {useCadeEconomy} from '../hooks/useeconomy';
import {Newamm} from '../constants/economy/economy';
import {ASSOCIATED_PROGRAM_ID} from '@coral-xyz/anchor/dist/cjs/utils/token';
import {useAnchorWallet} from '../hooks/useAnchorWallet';
import CallSwapIns from '../components/CallInstruction/callSwapIns';

type PropsForUsingEconomy = Readonly<{
  onComplete: () => void;
  anchorWallet: anchor.Wallet;
}>;

const HomeScreen = () => {
  const {connection} = useConnection();
  const [balance, setBalance] = useState<number>();
  const [publicKey, setPublickey] = useState<any>();
  const {selectedAccount, authorizeSession} = useAuthorization();
  const anchorWallet = useAnchorWallet(authorizeSession, selectedAccount);
  const {economyProgram} = useCadeEconomy(connection, anchorWallet);

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
      <Text>{publicKey ? balance : 'NotConnected'}</Text>
      <Text>{publicKey ? publicKey.toString() : 'NotConnected(p)'}</Text>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="container px-4 md:px-6 mb-16">
          <View>
            <CadeCardSection />
            <ConnectButton title="Connect wallet" />
            <CallSwapIns
              anchorWallet={anchorWallet}
              onComplete={() => console.log('com')}
            />
            <Ceiling displayNumber={true} msg={'Tower Defence'} />
            <View className="mt-36">
              <MachineSliderWithButtons red={false} />
            </View>
            <View>
              <Discover />
            </View>
            <View>
              <GameSection />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

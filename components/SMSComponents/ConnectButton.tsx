import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import React, {ComponentProps, useState, useCallback} from 'react';
import {Button, TouchableOpacity, View} from 'react-native';

import {useAuthorization} from '../providers/AuthorizationProvider';
import {useConnection} from '../providers/ConnectionProvider';
import { MonoTextSmall } from '../StylesText';

type Props = Readonly<ComponentProps<typeof Button>>;

export default function ConnectButton(props: Props) {
  const {authorizeSession} = useAuthorization();
  const [authorizationInProgress, setAuthorizationInProgress] = useState(false);
  const handleConnectPress = useCallback(async () => {
    try {
      if (authorizationInProgress) {
        return;
      }
      setAuthorizationInProgress(true);
      await transact(async wallet => {
        await authorizeSession(wallet);
      });
    } finally {
      setAuthorizationInProgress(false);
    }
  }, [authorizationInProgress, authorizeSession]);
  return (
    <>
      <View style={{
      }}>
        <View
        style={{height: 40}}
        className="flex justify-center bg-transparent w-max">
        <TouchableOpacity
          className="border-2"
          style={{
            height: 50,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: 'red',
          }}
          {...props}
          disabled={authorizationInProgress}
          onPress={handleConnectPress}
          >
          <MonoTextSmall style={{color: 'black'}}>
            Connect Wallet
          </MonoTextSmall>
        </TouchableOpacity>
      </View>
      </View>
    </>
  );
}

import {
  View,
  Text,
  ScrollView,
  Alert,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Program} from '@coral-xyz/anchor';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
  getOrCreateAssociatedTokenAccount,
} from '@solana/spl-token';
import {BN} from '@coral-xyz/anchor';
import * as anchor from '@coral-xyz/anchor';
import {Account, useAuthorization} from '../providers/AuthorizationProvider';
import {useConnection} from '../providers/ConnectionProvider';
import {PublicKey, SystemProgram} from '@solana/web3.js';
import ConnectButton from '../SMSComponents/ConnectButton';
import {usePrizeManager} from '../../hooks/usePrizeManager';
import {Prizemanager} from '../../constants/prize/prize';
import {ASSOCIATED_PROGRAM_ID} from '@coral-xyz/anchor/dist/cjs/utils/token';
import {MonoText, MonoTextSmall} from '../StylesText';
import {publicKey} from '@coral-xyz/anchor/dist/cjs/utils';
import BottomSheet from '../BottomSheet';

type PropsForPrizeManager = Readonly<{
  onComplete: () => void;
  anchorWallet: anchor.Wallet;
  mint: PublicKey;
  config: PublicKey;
}>;

export default function CallPrizeClaim({
  onComplete,
  anchorWallet,
  config,
  mint,
}: PropsForPrizeManager) {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const {connection} = useConnection();
  const {selectedAccount} = useAuthorization();
  const {confirmTx, prizerProgram} = usePrizeManager(connection, anchorWallet);

  const claim_prize = useCallback(
    async (program: Program<Prizemanager>, authorityPublicKey: PublicKey) => {
      if (program) {
        try {
          const cade_chest_mint = new PublicKey(mint);
          const prize_auth = PublicKey.findProgramAddressSync(
            [Buffer.from('prize_auth')],
            program.programId,
          )[0];
          const prize_config = new PublicKey(config);
          const particular_prize_vault = await getAssociatedTokenAddress(
            cade_chest_mint,
            prize_auth,
            true,
            TOKEN_PROGRAM_ID,
          );
          const admin_prize_vault = await getAssociatedTokenAddress(
            cade_chest_mint,
            authorityPublicKey,
            false,
            TOKEN_PROGRAM_ID,
          );
          const sig = await program.methods
            .givePrizeBackToVault()
            .accounts({
              user: authorityPublicKey,
              prizeAuth: prize_auth,
              prizeMint: cade_chest_mint,
              particularPrizeVault: particular_prize_vault,
              adminPrizeVault: admin_prize_vault,
              prizeConfig: prize_config,
              tokenProgram: TOKEN_PROGRAM_ID,
              associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
              systemProgram: SystemProgram.programId,
            })
            .rpc({skipPreflight: true});
          return sig;
        } catch (e) {
          console.log(e);
        }
      }
    },
    [],
  );

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };
  return (
    <>
      <BottomSheet visible={bottomSheetVisible} onClose={closeBottomSheet}>
        <ScrollView nestedScrollEnabled={true}>
          <View>
            <View>
              <MonoText>Congratulations 🎉</MonoText>
            </View>
            <View className="flex justify-center items-center bg-red-1d00">
              <Image
                source={require('../../assets/images/treasure.png')}
                style={{width: 200, height: 200}}
              />
            </View>

            <View className="flex flex-row justify-between  ml-2 mr-2">
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'VT323-Regular',
                  fontSize: 25,
                }}>
                You Calimed Your Prize Sucessfully
              </Text>
            </View>
            <View className="flex flex-col items-center mt-5">
              <TouchableOpacity
                className="border-2 mt-5"
                style={{
                  width: '90%',
                  height: 45,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderColor: 'yellow',
                }}
                onPress={closeBottomSheet}>
                <MonoTextSmall style={{color: 'black'}}>OK</MonoTextSmall>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </BottomSheet>

      <View style={{height: 40}} className="flex justify-center bg-transparent">
        <TouchableOpacity
          className="border-2"
          style={{
            height: 40,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: 'yellow',
          }}
          onPress={async () => {
            try {
              const tx = await claim_prize(
                prizerProgram,
                selectedAccount?.publicKey,
              );
              if (tx) {
                console.log(tx);
                openBottomSheet();
              }
            } catch (e) {
              console.log(e);
            }
          }}>
          <MonoTextSmall style={{color: 'black'}}>{'Claim'}</MonoTextSmall>
        </TouchableOpacity>
      </View>
    </>
  );
}

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
import idl from '../../constants/economy/economy.json';
import {Account, useAuthorization} from '../providers/AuthorizationProvider';
import {useConnection} from '../providers/ConnectionProvider';
import {Keypair, PublicKey, SystemProgram} from '@solana/web3.js';
import ConnectButton from '../SMSComponents/ConnectButton';
import {useCadeEconomy} from '../../hooks/useeconomy';
import {Newamm} from '../../constants/economy/economy';
import {ASSOCIATED_PROGRAM_ID} from '@coral-xyz/anchor/dist/cjs/utils/token';
import {MonoText, MonoTextSmall} from '../StylesText';
import BottomSheet from '../BottomSheet';
import {bs58} from '@coral-xyz/anchor/dist/cjs/utils/bytes';
import {wallet_three} from '../../keys/keys';
import {useNavigation} from '@react-navigation/native';

type PropsForUsingEconomy = Readonly<{
  onComplete: () => void;
  anchorWallet: anchor.Wallet;
}>;

export default function RedeemUSDC({
  onComplete,
  anchorWallet,
  name,
  price,
}: PropsForUsingEconomy) {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  let initializer_x_ata: PublicKey;
  let initializer_lp_ata: PublicKey;
  let vault_x_ata: PublicKey;
  let vault_y_ata: PublicKey;
  let vault_lp_ata: PublicKey;
  let indie_gamer_x_ata: PublicKey;
  let indie_gamer_vault: PublicKey;
  const auth = new PublicKey('F1k4KWvxvAATajNNjRjgr6iKafyiE2nguiqWgQQMRx7F');
  const new_auth = new PublicKey(
    '3BdgDss9nYNpDdtkquXxdFBtMzLMAWyJgEP5gqCQdUUT',
  );
  const config = new PublicKey('FJqdDWDbkiR82GgQGUpHJsR7poXNC4M3Yp2aYmSXVJsq');
  const lp_config = new PublicKey(
    'AnjcKCJqacNLzaZjjkrjqgUFCXW2fedgGB4zfRNFreCg',
  );

  const mint_x = new PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr');
  const mint_lp = PublicKey.findProgramAddressSync(
    [Buffer.from('lp'), config.toBuffer()],
    new PublicKey('FtrbVfeTkte7b9KTHYzpaRzJZT1t1SHaR1QuhyAusNTW'),
  )[0];

  const {connection} = useConnection();
  const {selectedAccount} = useAuthorization();

  const {confirmTx, economyProgram} = useCadeEconomy(connection, anchorWallet);

  const gamer_vault = Keypair.fromSecretKey(bs58.decode(wallet_three));
  const nav = useNavigation();

  const create_ata = async (publicKey: PublicKey) => {
    initializer_x_ata = await getAssociatedTokenAddress(
      mint_x,
      publicKey,
      false,
      TOKEN_PROGRAM_ID,
    );
    initializer_lp_ata = await getAssociatedTokenAddress(
      mint_lp,
      publicKey,
      false,
      TOKEN_PROGRAM_ID,
    );
    vault_x_ata = await getAssociatedTokenAddress(
      mint_x,
      auth,
      true,
      TOKEN_PROGRAM_ID,
    );
    vault_y_ata = await getAssociatedTokenAddress(
      mint_x,
      new_auth,
      true,
      TOKEN_PROGRAM_ID,
    );
    vault_lp_ata = await getAssociatedTokenAddress(
      mint_lp,
      auth,
      true,
      TOKEN_PROGRAM_ID,
    );
    indie_gamer_vault = await getAssociatedTokenAddress(
      mint_lp,
      gamer_vault.publicKey,
      false,
      TOKEN_PROGRAM_ID,
    );
    indie_gamer_x_ata = await getAssociatedTokenAddress(
      mint_x,
      gamer_vault.publicKey,
      false,
      TOKEN_PROGRAM_ID,
    );
  };

  const payForGame = useCallback(
    async (program: Program<Newamm>, authorityPublicKey: PublicKey) => {
      try {
        await create_ata(authorityPublicKey);
        const sig = await program.methods
          .claimUsdcForCade()
          .accounts({
            auth,
            newAuth: new_auth,
            user: authorityPublicKey,
            user2: authorityPublicKey,
            gamer: gamer_vault.publicKey,
            mintX: mint_x,
            mintLp: mint_lp,
            vaultLp: vault_lp_ata,
            vaultY: vault_y_ata,
            gamerVaultLp: indie_gamer_vault,
            gamerVaultX: indie_gamer_x_ata,
            config,
            lpConfig: lp_config,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          })
          .signers([gamer_vault])
          .rpc({skipPreflight: true});
        return sig;
        //await confirmTx(sig);
      } catch (error) {
        console.log(error);
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
              <MonoText>Awsome 🎉</MonoText>
            </View>
            <View className="flex justify-center items-center bg-red-1d00">
              <Image
                source={require('../../assets/images/cadenew.png')}
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
                You Just Redeemed 100 Cade
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
                  borderColor: 'red',
                }}
                onPress={() => closeBottomSheet()}>
                <MonoTextSmall style={{color: 'black'}}>Close</MonoTextSmall>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </BottomSheet>

      <View
        style={{height: 50, width: '80%'}}
        className="flex justify-center bg-transparent">
        <TouchableOpacity
          className="border-2"
          style={{
            height: 50,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: 'yellow',
          }}
          onPress={async () => {
            try {
              const tx = await payForGame(
                economyProgram,
                selectedAccount?.publicKey,
              );
              if (tx) {
                console.log('DOne');
                openBottomSheet();
              }
            } catch (e) {
              console.log(e);
            }
          }}>
          <MonoTextSmall style={{color: 'black'}}>Redeem</MonoTextSmall>
        </TouchableOpacity>
      </View>
    </>
  );
}

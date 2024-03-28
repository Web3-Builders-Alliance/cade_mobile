import {View, Text, ScrollView, Alert, Button, TouchableOpacity} from 'react-native';
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
import {PublicKey, SystemProgram} from '@solana/web3.js';
import ConnectButton from '../SMSComponents/ConnectButton';
import {useCadeEconomy} from '../../hooks/useeconomy';
import {Newamm} from '../../constants/economy/economy';
import {ASSOCIATED_PROGRAM_ID} from '@coral-xyz/anchor/dist/cjs/utils/token';
import {MonoTextSmall} from '../StylesText';

type PropsForUsingEconomy = Readonly<{
  onComplete: () => void;
  anchorWallet: anchor.Wallet;
}>;

export default function CallSwapIns({
  onComplete,
  anchorWallet,
  name,
  price,
}: PropsForUsingEconomy) {
  let initializer_x_ata: PublicKey;
  let initializer_lp_ata: PublicKey;
  let vault_x_ata: PublicKey;
  let vault_y_ata: PublicKey;
  let vault_lp_ata: PublicKey;
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
  };

  const useSwap = useCallback(
    async (program: Program<Newamm>, authorityPublicKey: PublicKey) => {
      try {
        await create_ata(authorityPublicKey);
        const sig = await program.methods
          .swap(
            new BN(1_000_000),
            new BN(Math.floor(new Date().getTime() / 1000) + 600),
          )
          .accounts({
            auth,
            newAuth: new_auth,
            user: authorityPublicKey,
            user2: authorityPublicKey,
            mintX: mint_x,
            mintLp: mint_lp,
            userVaultX: initializer_x_ata,
            userVaultLp: initializer_lp_ata,
            vaultX: vault_x_ata,
            vaultY: vault_y_ata,
            vaultLp: vault_lp_ata,
            config,
            lpConfig: lp_config,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          })
          .rpc({skipPreflight: true});
        await confirmTx(sig);
        await console.log(sig.toString());
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  return (
    <>
      <View
        style={{height: 40}}
        className="flex justify-center bg-transparent w-max">
        <TouchableOpacity
          className="border-2"
          style={{
            height: 40,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: 'red',
          }}
          onPress={async () => {
            try {
              const signature = await useSwap(
                economyProgram,
                selectedAccount?.publicKey,
              );
            } catch (e) {
              console.log(e);
            }
          }}>
          <MonoTextSmall style={{color: 'black'}}>
            {name} ({price + 'USDC'})
          </MonoTextSmall>
        </TouchableOpacity>
      </View>
    </>
  );
}

import {AnchorProvider, Program} from '@coral-xyz/anchor';
import {
  Commitment,
  Connection,
  PublicKey,
  SystemProgram,
} from '@solana/web3.js';
import {useMemo} from 'react';
import * as anchor from '@coral-xyz/anchor';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
  getOrCreateAssociatedTokenAccount,
} from '@solana/spl-token';
import {BN} from '@coral-xyz/anchor';
import {Prizemanager} from '../constants/prize/prize';
import idl from '../constants/prize/prize.json';


export function usePrizeManager(
  connection: Connection,
  anchorWallet: anchor.Wallet | null,
) {
  const commitment: Commitment = 'confirmed';
  const prizemanagerProgramId = useMemo(() => {
    return new PublicKey('5KoYYoYuHL19B1EFjPNu9i3xcvbdxrqq5qyXHuasJfQ7');
  }, []);

  const provider = useMemo(() => {
    if (!anchorWallet) {
      return null;
    }
    return new AnchorProvider(connection, anchorWallet, {
      preflightCommitment: 'confirmed',
      commitment: 'processed',
    });
  }, [anchorWallet, connection]);

  const confirmTx = async (signature: string) => {
    const latestBlockhash = await anchor
      .getProvider()
      .connection.getLatestBlockhash();
    await anchor.getProvider().connection.confirmTransaction(
      {
        signature,
        ...latestBlockhash,
      },
      commitment,
    );
  };

  const prizeProgram = useMemo(() => {
    if (!provider) {
      return null;
    }
    return new Program<Prizemanager>(
      idl as Prizemanager,
      prizemanagerProgramId,
      provider,
    );
  }, [prizemanagerProgramId, provider]);

  return {
    prizerProgram: prizeProgram,
    prizemanagerProgramId: prizemanagerProgramId,
    confirmTx,
  };
}

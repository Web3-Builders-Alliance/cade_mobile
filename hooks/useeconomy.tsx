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
import {Newamm} from '../constants/economy/economy';
import idl from '../constants/economy/economy.json';
import {program} from '@coral-xyz/anchor/dist/cjs/native/system';
import {publicKey} from '@coral-xyz/anchor/dist/cjs/utils';
import {ASSOCIATED_PROGRAM_ID} from '@coral-xyz/anchor/dist/cjs/utils/token';

export function useCadeEconomy(
  connection: Connection,
  anchorWallet: anchor.Wallet | null,
) {
  const commitment: Commitment = 'confirmed';
  const economyProgramId = useMemo(() => {
    return new PublicKey('FtrbVfeTkte7b9KTHYzpaRzJZT1t1SHaR1QuhyAusNTW');
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


  const economyProgram = useMemo(() => {
    if (!provider) {
      return null;
    }

    return new Program<Newamm>(idl as Newamm, economyProgramId, provider);
  }, [economyProgramId, provider]);

  return {
    economyProgram: economyProgram,
    economyProgramId: economyProgramId,
    confirmTx
  };
}

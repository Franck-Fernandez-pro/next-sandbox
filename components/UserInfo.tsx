'use client';

import { parseEther } from 'viem';
import {
  useAccount,
  usePrepareSendTransaction,
  useSendTransaction,
} from 'wagmi';

export default function UserInfo() {
  const { isConnecting, isDisconnected, isConnected } = useAccount();
  const { config } = usePrepareSendTransaction({
    to: '0x11C26Eb149403B6a2Ee8E8e18900508E8f85Ec65',
    value: parseEther('1'),
  });
  const { data, isLoading, isSuccess, isError, sendTransaction } =
    useSendTransaction(config);

  return (
    <div>
      {isConnecting && 'Connecting…'}
      {isDisconnected && 'Disconnected'}

      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      {isError && 'isError'}

      <button
        onClick={() => {
          sendTransaction?.();
        }}
      >
        Send 1
      </button>
    </div>
  );
}

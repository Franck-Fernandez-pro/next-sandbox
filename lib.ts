import { Hex } from 'viem';
import { axiosInfura } from './axios';
import { GetBlockByNumberRequest } from './type';

export const getBlockByNumber = async (
  blockNumber: Hex | 'latest',
  transaction = false
) =>
  await axiosInfura.post<GetBlockByNumberRequest>('', {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getBlockByNumber',
    params: [blockNumber, transaction],
  });

import { Hex } from 'viem';
import { axiosInfura } from './axios';
import {
  GetBlockByNumberRequest,
  QuotesRequest,
  GetCryptosRequest,
  InfoRequest,
} from './type';

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

// -------------------------------------------------------
// -               API - COIN_MARKET
// -------------------------------------------------------
const coinMarketHeaders = {
  'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_KEY || '',
  Accept: 'application/json',
};

export async function getQuotes({
  symbol,
  id,
}: {
  symbol?: string;
  id?: string;
}) {
  const params = new URLSearchParams();

  symbol !== undefined && params.set('symbol', symbol);
  id !== undefined && params.set('id', id);

  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?${params.toString()}`,
    { headers: coinMarketHeaders, next: { revalidate: 3600 } }
  );
  return response.json() as Promise<QuotesRequest>;
}

export async function getInfo({ id }: { id?: string }) {
  const params = new URLSearchParams();
  id !== undefined && params.set('id', id);

  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?${params.toString()}`,
    { headers: coinMarketHeaders, next: { revalidate: 3600 } }
  );
  return response.json() as Promise<InfoRequest>;
}

export async function getListings() {
  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=USD`,
    { headers: coinMarketHeaders, next: { revalidate: 3600 } }
  );
  return response.json() as Promise<GetCryptosRequest>;
}

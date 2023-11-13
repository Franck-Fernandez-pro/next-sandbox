import axiosDefault from 'axios';

export const axiosCoinMarket = axiosDefault.create({
  baseURL: 'https://pro-api.coinmarketcap.com/',
  headers: {
    'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_KEY || '',
    Accept: 'application/json',
  },
});

import axiosDefault from 'axios';

export const axiosCoinMarket = axiosDefault.create({
  baseURL: 'https://pro-api.coinmarketcap.com/',
  headers: {
    'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_KEY || '',
    Accept: 'application/json',
  },
});

export const axiosInfura = axiosDefault.create({
  baseURL: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  headers: {
    Accept: 'application/json',
  },
});

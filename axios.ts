import axiosDefault from 'axios';

export const axios = axiosDefault.create({
  baseURL: 'https://pro-api.coinmarketcap.com/',
  headers: {
    'X-CMC_PRO_API_KEY': process.env.API_KEY || '',
    Accept: 'application/json',
  },
});

import axiosDefault from 'axios';

export const axiosInfura = axiosDefault.create({
  baseURL: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  headers: {
    Accept: 'application/json',
  },
});

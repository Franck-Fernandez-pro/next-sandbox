import { Hex } from 'viem';

export type GetCryptosRequest = {
  status: Status;
  data: Crypto[];
};

export type GetCryptosMetadataRequest = {
  status: Status;
  data: { [key: string]: Metadata };
};

export type Crypto = {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: Date;
  tags: string[];
  max_supply: number | null;
  circulating_supply: number;
  total_supply: number;
  infinite_supply: boolean;
  platform: Platform | null;
  cmc_rank: number;
  self_reported_circulating_supply: number | null;
  self_reported_market_cap: number | null;
  tvl_ratio: number | null;
  last_updated: Date;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      volume_change_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      market_cap: number;
      market_cap_dominance: number;
      fully_diluted_market_cap: number;
      tvl: number | null;
      last_updated: Date;
    };
  };
};

type Platform = {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  token_address: string;
};

type Status = {
  timestamp: Date;
  error_code: number;
  error_message: null;
  elapsed: number;
  credit_count: number;
  notice: null;
  total_count: number;
};

export type Metadata = {
  id: number;
  name: string;
  symbol: string;
  category: string;
  description: string;
  slug: string;
  logo: string;
  subreddit: string;
  notice: string;
  tags: string[];
  'tag-names': string[];
  'tag-groups': 'OTHERS' | 'ALGORITHM' | 'CATEGORY' | 'PLATFORM'[];
  urls: {
    website: string[];
    twitter: any[];
    message_board: string[];
    chat: any[];
    facebook: any[];
    explorer: string[];
    reddit: string[];
    technical_doc: string[];
    source_code: string[];
    announcement: any[];
  };
  platform: null;
  date_added: string;
  twitter_username: string;
  is_hidden: number;
  date_launched: string;
  contract_address: any[];
  self_reported_circulating_supply: null;
  self_reported_tags: null;
  self_reported_market_cap: null;
  infinite_supply: boolean;
};

// ---------------------------------------------------
// -                    INFURA
// ---------------------------------------------------
export type GetBlockByNumberRequest = {
  jsonrpc: string;
  id: number;
  result: Block;
};

export type Block = {
  baseFeePerGas: string;
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  hash: string;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: Hex;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: string;
  stateRoot: string;
  timestamp: Hex;
  totalDifficulty: string;
  transactions: Transaction[];
  transactionsRoot: string;
  uncles: any[];
  withdrawals: {
    address: string;
    amount: string;
    index: string;
    validatorIndex: string;
  }[];
  withdrawalsRoot: string;
};

export type Transaction = {
  accessList?: {
    address: string;
    storageKeys: string[];
  }[];
  blockHash: string;
  blockNumber: string;
  chainId?: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  nonce: string;
  r: string;
  s: string;
  to: string;
  transactionIndex: string;
  type: string;
  v: string;
  value: string;
  yParity?: string;
};

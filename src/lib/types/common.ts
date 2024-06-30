import { Address } from "viem";

export interface UnderlyingToken {
  symbol: string;
  address: Address;
  icon: string;
}

export interface Pool {
  id: number;
  symbol: string;
  network: string;
  power: number;
  underlyingTokens: UnderlyingToken[];
  poolAddress: Address;
  date: number;
  age: string;
  tvl: string;
  volume: {
    value: string;
    growth: string;
  };
  fee: {
    value: string;
    growth: string;
  };
  decimals: number;
}

export interface PotentiaPools {
  [key: string]: Pool;
}

export interface PoolInfo {
  tvl: string;
  age: string;
  vol: string;
  fee: string;
  lastMonthTimestamp: string;
  poolAddr: string;
  underlying: string;
  pool: string;
  power: number;
  underlyingDecimals: number;
}

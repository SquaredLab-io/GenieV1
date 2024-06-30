import { Pool, PotentiaPools } from "./types/common";
import { Address } from "viem";

// export const potentia_pool = {
//   // name: "Potentia V1",
//   pool: "WETH",
//   id: "0xb725982297ac744fed6d1a49892a831d16913ebb68b61e7457834ce896d02b8702000000",
//   blockNumber: "11736902",
//   poolAddr: "0x762c9b8fa27546c0ddc3e49883fc14bb71723eeb",
//   poolOp: "0x1ecd58d29f57d3f9c1a631e94b400be78cbeb840",
//   transactionHash: "0xb725982297ac744fed6d1a49892a831d16913ebb68b61e7457834ce896d02b87",
//   blockTimestamp: "1719242092"
// };

export enum PoolOptions {
  weth = "weth",
  wbtc = "wbtc",
  usdc = "usdc"
}

export const potentiaPools: PotentiaPools = {
  weth: {
    id: 0,
    symbol: "ETH/USDC",
    network: "Base Sepolia",
    power: 2,
    underlyingTokens: [
      {
        symbol: "WETH",
        address: "0x3e36708aa8b5c027cb3a77f36c4ebdfb689b3bd6" as Address,
        icon: "/tokens/weth.svg"
      },
      {
        symbol: "USDC",
        address: "0xEA5f22bc4A620b01D48e74B6B69e74F3b2299654" as Address,
        icon: "/tokens/usdc.svg"
      }
    ],
    poolAddress: "0x762c9b8fa27546c0ddc3e49883fc14bb71723eeb" as Address,
    date: 1233435,
    age: "Mon Jun 24 2024",
    tvl: "22737", // in dollars
    volume: {
      value: "50000000000000000000", // in dollars
      growth: "18" // in %
    },
    fee: {
      value: "0",
      growth: "0"
    },
    decimals: 18
  },
  wbtc: {
    id: 1,
    symbol: "BTC/USDC",
    network: "Base Sepolia",
    power: 3,
    underlyingTokens: [
      {
        symbol: "WBTC",
        address: "0xa74ca0170ad066881d6413e3cef5a2dbafde5bdf" as Address,
        icon: "/tokens/wbtc.svg"
      },
      {
        symbol: "USDC",
        address: "0xEA5f22bc4A620b01D48e74B6B69e74F3b2299654" as Address,
        icon: "/tokens/usdc.svg"
      }
    ],
    poolAddress: "0x73d705ff0fc884315a61afd3fde3646fb0a949e6" as Address,
    date: 1233432,
    age: "Sun Jun 30 2024",
    tvl: "10029", // in dollars
    volume: {
      value: "20000000000000000000", // in dollars
      growth: "18" // in %
    },
    fee: {
      value: "32.1",
      growth: "18"
    },
    decimals: 18
  },
  usdc: {
    id: 2,
    symbol: "USDC/USDT",
    network: "Base Sepolia",
    power: 2,
    underlyingTokens: [
      {
        symbol: "USDC",
        address: "0xEA5f22bc4A620b01D48e74B6B69e74F3b2299654" as Address,
        icon: "/tokens/usdc.svg"
      },
      {
        symbol: "USDT",
        address: "0xEA5f22bc4A620b01D48e74B6B69e74F3b2299654" as Address,
        icon: "/tokens/usdt.svg"
      }
    ],
    poolAddress: "0x390e5b479b9c743f933a4fe50cd0a4fae742fdb0" as Address,
    date: 1233431,
    age: "Sun Jun 30 2024",
    tvl: "10000000000", // in dollars
    volume: {
      value: "60110000", // in dollars
      growth: "18" // in %
    },
    fee: {
      value: "0",
      growth: "0"
    },
    decimals: 6
  }
};

export const getTokenSymbol = (symbol: string): string => {
  switch (symbol) {
    case "WBTC":
      return "BTC";
    case "WETH":
      return "ETH";
    default:
      return "";
  }
};

export const potentiaPoolsList: Pool[] = [
  potentiaPools[PoolOptions.weth],
  potentiaPools[PoolOptions.wbtc],
  potentiaPools[PoolOptions.usdc]
];

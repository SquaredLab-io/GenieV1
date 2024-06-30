import { Address } from "viem";

export enum TableOptions {
  all = "all",
  my = "my",
  trxn = "trxn"
}

export type Token = {
  symbol: string;
  imgSrc: string;
  address: Address;
};

export type Amount = {
  value: string;
  growth: string;
};

export type PoolType = {
  id: number;
  underlyingAssets: Token[];
  network: string;
  power: number;
  age: string;
  tvl: string;
  volume: Amount;
  fee: Amount;
  protocol: string;
};

export type UserPoolType = {
  id: number;
  assets: Token[];
  network: string;
  power: number;
  protocol: string;
  totalAmount: Amount;
};

export type TxnPoolType = {
  id: number;
  assets: Token[];
  network: string;
  power: number;
  protocol: string;
  txnHash: string;
  amount: string;
  feesEarned: string;
  total: string;
  totalDollar: string;
};

// dummy List of user's open positions
export const allPoolsData: PoolType[] = [
  {
    id: 0,
    underlyingAssets: [
      {
        symbol: "WETH",
        imgSrc: "/tokens/weth.svg",
        address: "0x3e36708AA8B5C027cB3A77f36c4EBdFb689B3bD6"
      },
      {
        symbol: "USDC",
        imgSrc: "/tokens/usdc.svg",
        address: "0x3e36708AA8B5C027cB3A77f36c4EBdFb689B3bD6"
      }
    ],
    network: "Base Sepolia",
    power: 2,
    protocol: "Potentia V1",
    age: "15d",
    tvl: "60110000", // in dollars
    volume: {
      value: "60110000", // in dollars
      growth: "18" // in %
    },
    fee: {
      value: "32.1",
      growth: "18"
    }
  }
  // {
  //   id: 1,
  //   assets: [
  //     {
  //       symbol: "WETH",
  //       imgSrc: "/icons/ethereum.svg"
  //     },
  //     {
  //       symbol: "ROME",
  //       imgSrc: "/icons/rome.svg"
  //     }
  //   ],
  //   network: "Base",
  //   power: 4,
  //   protocol: "Potentia V1",
  //   age: "2M 5d",
  //   tvl: "60110000", // in dollars
  //   volume: {
  //     value: "60110000", // in dollars
  //     growth: "18" // in %
  //   },
  //   fee: {
  //     value: "32.1",
  //     growth: "18"
  //   }
  // },
  // {
  //   id: 2,
  //   assets: [
  //     {
  //       symbol: "WETH",
  //       imgSrc: "/icons/ethereum.svg"
  //     },
  //     {
  //       symbol: "ROME",
  //       imgSrc: "/icons/rome.svg"
  //     }
  //   ],
  //   network: "Base",
  //   power: 4,
  //   protocol: "Potentia V1",
  //   age: "2M 5d",
  //   tvl: "60110000", // in dollars
  //   volume: {
  //     value: "60110000", // in dollars
  //     growth: "-18" // in %
  //   },
  //   fee: {
  //     value: "32.1",
  //     growth: "18"
  //   }
  // }
];

// export const userPoolsData: UserPoolType[] = [
//   {
//     id: 0,
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     network: "Base",
//     power: 4,
//     protocol: "Potentia V1",
//     totalAmount: {
//       value: "60110000", // in dollars
//       growth: "18" // in %
//     }
//   },
//   {
//     id: 1,
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     network: "Base",
//     power: 4,
//     protocol: "Potentia V1",
//     totalAmount: {
//       value: "60110000", // in dollars
//       growth: "18" // in %
//     }
//   },
//   {
//     id: 2,
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     network: "Base",
//     power: 4,
//     protocol: "Potentia V1",
//     totalAmount: {
//       value: "60110000", // in dollars
//       growth: "18" // in %
//     }
//   },
//   {
//     id: 3,
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     network: "Base",
//     power: 4,
//     protocol: "Potentia V1",
//     totalAmount: {
//       value: "60110000", // in dollars
//       growth: "18" // in %
//     }
//   }
// ];

// export const txnPoolsData: TxnPoolType[] = [
//   {
//     id: 0,
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     network: "Base",
//     power: 4,
//     protocol: "Potentia V1",
//     txnHash: "0x2877d4634e8731748fec8bd8f1d7b6a426bdb1ecc7657568f641daea486b79f2",
//     amount: "600 USDT",
//     feesEarned: "600 USDT",
//     total: "600 USDT",
//     totalDollar: "600 USDT"
//   }
// ];

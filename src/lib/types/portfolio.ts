import { Address } from "viem";

export type Token = {
  symbol: string;
  imgSrc: string;
};

export interface UserTx {
  addLiquidities: any[];
  openLongs: any[];
  openShorts: any[];
  removeLiquidities: any[];
  closeLongs: any[];
  closeShorts: any[];
}

// ERC20
type TokenT<TType extends string = string> = {
  type: TType;
  chainID: number;
};
type BaseERC20<TType extends string = string> = TokenT<TType> & {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
  blockCreated: bigint;
};
type ERC20 = BaseERC20<"erc20">;

// User Transaction in History
export interface Tx {
  /**
   * address `0x${string}`
   * blockCreated 0n
   * chainId
   * decimals
   * name
   * symbol
   * type
   */
  underlying: ERC20;
  pool: string; // "WETH / USDC"
  poolAddress: string; // "0x762c9b8fa27546c0ddc3e49883fc14bb71723eeb"
  power: number; // 2000000000000000000
  dateTime: string; // "1719563334"
  size: bigint; // 480819234108233099986n
  action:
    | "Add Liquidity"
    | "Remove Liquidity"
    | "Open Long Position"
    | "Close Long Position"
    | "Open Short Position"
    | "Close Short Position";
}

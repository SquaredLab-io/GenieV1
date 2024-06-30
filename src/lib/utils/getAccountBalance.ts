import toUnits from "./formatting";

export type WagmiFetchBalanceResult = {
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
};

/**
 * Account balance formatted with Currency/Token Symbol
 */
export const getAccountBalance = (
  data?: WagmiFetchBalanceResult,
  isLoading?: boolean
): string => {
  if (!data) return "0";
  else if (isLoading) return "loading...";
  return `${toUnits(parseFloat(data?.formatted), 4)} ${data?.symbol}`;
};

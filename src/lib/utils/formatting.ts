export const formatDollarUnits = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);
};

/**
 *
 * @param num Number to convert into Dollar Notation
 * @param decimals Number of decimals to round to
 * @returns Converted amounts in Dollarsx
 */
export function toDollarUnits(num: number, decimals: number): string {
  if (num >= 1000000) {
    return "$" + Number((num / 1000000).toFixed(decimals)).toLocaleString("en-US") + "M";
  } else if (num >= 1000 && num < 1000000) {
    return "$" + Number((num / 1000).toFixed(decimals)).toLocaleString("en-US") + "K";
  }
  return "$" + Number(num.toFixed(decimals)).toLocaleString("en-US");
}

/**
 *
 * @param num Number to convert into Dollar Notation
 * @param decimals Number of decimals to round to
 * @returns Converted amounts in shortned Units
 */
export default function toUnits(num: number, decimals: number): string {
  if (!num) return "0";
  else if (num >= 1000000) {
    return Number((num / 1000000).toFixed(decimals)).toLocaleString("en-US") + "M";
  } else if (num >= 1000 && num < 1000000) {
    return Number((num / 1000).toFixed(decimals)).toLocaleString("en-US") + "K";
  }
  return Number(num.toFixed(decimals)).toLocaleString("en-US");
}

export function shortenHash(hash: string): string {
  if (!hash) return "N/A";
  return hash.slice(0, 4) + "..." + hash.slice(-2);
}

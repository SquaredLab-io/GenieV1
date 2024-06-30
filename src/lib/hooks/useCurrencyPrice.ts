import { makeApiRequest } from "@lib/datafeed/helpers";
import { getTokenSymbol } from "@lib/pools";
import { useEffect, useState } from "react";

export function useCurrencyPrice(symbol: string) {
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState<any>();
  const [isVolLoading, setVolIsLoading] = useState(false);
  const _symbol = getTokenSymbol(symbol);

  const pricePath = `data/price?fsym=${_symbol.toUpperCase()}&tsyms=USD`;
  const dailyVolPath = `data/symbol/histoday?fsym=ETH&tsym=USD&limit=10`;

  useEffect(() => {
    (async () => {
      try {
        const result = await makeApiRequest(pricePath);
        console.log("result", result);
        setPrice(result.USD);
        setIsLoading(false);
      } catch (error) {
        console.error("Error while fetching price.");
      } finally {
        setIsLoading(false);
      }
    })();

    (async () => {
      try {
        const result = await makeApiRequest(dailyVolPath);
        console.log("daily volume", result);
        setVolume(result.Data[10]);
        setVolIsLoading(false);
      } catch (error) {
        console.error("Error while fetching price.");
      } finally {
        setVolIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    price,
    isLoading,
    volume,
    isVolLoading
  };
}

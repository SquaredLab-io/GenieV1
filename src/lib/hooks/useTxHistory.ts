import { Tx } from "@lib/types/portfolio";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { usePotentiaSdk } from "./usePotentiaSdk";
import { Address } from "viem";
import { useTradeStore } from "@store/tradeStore";

type ReturnType = {
  isLoading: boolean;
  refetch: () => Promise<void>;
  data?: Tx[];
};

export function useTxHistory(): ReturnType {
  const [txHistory, setTxHistory] = useState<Tx[]>();
  const [isLoadingTxH, setIsLoadingTxH] = useState<boolean>(false);
  const { selectedPool } = useTradeStore();

  const { address } = useAccount();
  const { potentia } = usePotentiaSdk();

  async function refetch() {
    try {
      console.log("fetching txHistory...");
      setIsLoadingTxH(true);
      const result = await potentia?.getUserTxHistory(
        address as Address,
        selectedPool.poolAddress
      );
      setTxHistory(result);
    } catch (error) {
      console.error("Error -- fetching transaction history", error);
    } finally {
      setIsLoadingTxH(false);
    }
  }

  useEffect(() => {
    if (address && potentia) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, potentia, selectedPool]);

  return { data: txHistory, isLoading: isLoadingTxH, refetch };
}

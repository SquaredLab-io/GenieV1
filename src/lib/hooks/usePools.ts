import { useEffect, useState } from "react";
import { usePotentiaSdk } from "./usePotentiaSdk";
import { PoolInfo } from "@lib/types/common";

export function usePools() {
  const [pools, setPools] = useState<PoolInfo[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const { potentia } = usePotentiaSdk();

  useEffect(() => {
    if (potentia) {
      (async () => {
        try {
          setIsFetching(true);
          const pools = await potentia?.getPools();
          console.log("pools", pools);
          setPools(pools);
        } catch (error) {
          setIsFetching(false);
        } finally {
          setIsFetching(false);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [potentia]);

  return {
    pools,
    isFetching
  };
}

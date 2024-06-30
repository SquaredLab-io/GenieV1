import { useEffect, useState } from "react";
import { usePotentiaSdk } from "./usePotentiaSdk";
import { useAccount } from "wagmi";
import { Address, formatUnits } from "viem";
import { PositionType } from "@lib/types/enums";

/**
 * useCurrentPosition - A hook to fetch the current position of a user in the Potentia protocol.
 *
 * @param {PositionType} isLong - Indicates whether the position is long or short.
 *
 * @returns {{
 *   data: {
 *     value: string,
 *     formatted: string
 *   },
 *   isFetching: boolean
 * }} The current position data and fetching status.
 */
export function useCurrentPosition(isLong: PositionType, poolAddress: Address) {
  const [position, setPosition] = useState<string>("0");
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const { potentia } = usePotentiaSdk();
  const { address } = useAccount();

  useEffect(() => {
    if (potentia) {
      (async () => {
        try {
          setIsFetching(true);
          console.log("getTokenBalance", {
            poolAddress,
            address,
            isLong
          });
          const currPos = await potentia?.getTokenBalance(
            poolAddress, // poolAddress
            address as `0x${string}`, // userAddress
            isLong // isLong
          );
          console.log("currPos", currPos);
          setPosition(currPos);
        } catch (error) {
          setIsFetching(false);
        } finally {
          setIsFetching(false);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [potentia, address, poolAddress]);

  return {
    data: {
      value: position,
      formatted: parseFloat(formatUnits(BigInt(position), 18)).toFixed(3)
    },
    isFetching
  };
}

import { useEffect, useState } from "react";
import { Address } from "viem";
import { usePotentiaSdk } from "./usePotentiaSdk";

export function usePower(poolAddress: Address) {
  const [power, setPower] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { potentia } = usePotentiaSdk();

  async function getPower() {
    try {
      setIsLoading(true);
      const p = await potentia?.getP(poolAddress);
      console.log("getPower", p);
      setPower(p);
      setIsLoading(false);
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPower();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    power,
    isLoading
  };
}

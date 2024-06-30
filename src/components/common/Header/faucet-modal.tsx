"use client";

import Image from "next/image";
import ModalTrigger from "@components/common/Modal";
import { potentiaPoolsList } from "@lib/pools";
import { usePotentiaSdk } from "@lib/hooks/usePotentiaSdk";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useIsMounted } from "@lib/hooks/useIsMounted";

const FaucetModal = ({
  open,
  setOpen,
  trigger
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  trigger?: React.ReactNode;
}) => {
  const { potentia } = usePotentiaSdk();
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();
  const { isMounted } = useIsMounted();

  async function getFaucet(tokenAddress: string) {
    try {
      setIsLoading(true);
      const hash = await potentia?.callFaucet(tokenAddress, address as string);
      if (hash) {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  }

  if (!isMounted) {
    return <></>;
  }

  return (
    <ModalTrigger
      open={open}
      onOpenChange={setOpen}
      title="Get Assets"
      description="Select to get 50 Tokens on Base Sepolia"
      trigger={trigger}
    >
      <div className="flex flex-row gap-3">
        {potentiaPoolsList.map((pool, index) => (
          <button
            key={pool.id}
            onClick={() => {
              getFaucet(pool.underlyingTokens[0].address);
            }}
            className="flex flex-row items-center gap-1 py-2 px-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            <div key={index} className="z-0 flex flex-row gap-2">
              <Image
                src={pool.underlyingTokens[0].icon}
                alt={pool.underlyingTokens[0].symbol}
                width={24}
                height={24}
              />
              <span>{pool.underlyingTokens[0].symbol}</span>
            </div>
          </button>
        ))}
      </div>
      {isLoading && (
        <div className="text-center w-full">
          <p>loading faucets...</p>
        </div>
      )}
    </ModalTrigger>
  );
};

export default FaucetModal;

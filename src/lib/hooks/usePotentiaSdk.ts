import { useEffect, useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";
import { PotentiaSdk } from "@squaredlab-io/sdk/src";
import { SUBGRAPH_URL } from "@lib/keys";

export const usePotentiaSdk = () => {
  const [potentia, setPotentia] = useState<PotentiaSdk | undefined>(undefined);

  const { address, chainId } = useAccount();

  // Wallet Client
  const { data: walletClient, status } = useWalletClient();
  // Public Client
  const publicClient: any = createPublicClient({
    chain: baseSepolia,
    transport: http()
  });

  async function userConnected() {
    if (address && chainId && status == "success") {
      const potentia = new PotentiaSdk(publicClient, walletClient, SUBGRAPH_URL);
      setPotentia(potentia);
    }
  }

  useEffect(() => {
    userConnected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletClient, address]);

  return {
    potentia
  };
};

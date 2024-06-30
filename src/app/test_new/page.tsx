"use client";

import { useIsMounted } from "@lib/hooks/useIsMounted";
import { useAccount } from "wagmi";

export default function TestNew() {
  const { isMounted } = useIsMounted();
  const { address } = useAccount();

  if (!isMounted) {
    return <></>;
  }

  return (
    <div>
      <p>{!address && "Connect wallet first!"}</p>
    </div>
  );
}

import { ALCHEMY_KEY, WALLET_CONNECT_PROJECT_ID } from "@lib/keys";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { BASE_SEPOLIA_RPC, meta } from "./constants";
import {
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet
} from "@rainbow-me/rainbowkit/wallets";

coinbaseWallet.preference = "smartWalletOnly";

export const config = getDefaultConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(BASE_SEPOLIA_RPC)
  },
  wallets: [
    {
      groupName: "Suggested",
      wallets: [metaMaskWallet, walletConnectWallet, coinbaseWallet]
    }
  ],
  ssr: false, // deafult
  cacheTime: 4_000, // default
  // REQUIRED WALLET CONNECT API KEY
  projectId: WALLET_CONNECT_PROJECT_ID,
  // APP INFO
  appName: meta.APP_NAME,
  appDescription: meta.DESCRIPTION,
  appUrl: meta.URL,
  appIcon: meta.LOGO
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

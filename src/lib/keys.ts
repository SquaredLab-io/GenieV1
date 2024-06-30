// API KEYS
export const WALLET_CONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";
if (!WALLET_CONNECT_PROJECT_ID) {
  console.warn("You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable");
}
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;
export const ALCHEMY_KEY = process.env.NEXT_PUBLIC_ALCHEMY_KEY as string;
export const CRYPRO_COMPARE_API = process.env.NEXT_PUBLIC_CRYPRO_COMPARE_API as string;

// URLS
export const SUBGRAPH_URL = process.env.NEXT_PUBLIC_SUBGRAPH as string;

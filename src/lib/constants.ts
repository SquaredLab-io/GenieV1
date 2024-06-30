import { IconType } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { Address } from "viem";
import { ALCHEMY_KEY } from "./keys";

// App State
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_IS_PRODUCTION === "production";

// Base Sepolia RPC URL
export const BASE_SEPOLIA_RPC = `https://base-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`;

//
// App's Metadata all at one place
//
export const meta = {
  APP_NAME: "Genie | SquaredLabs",
  DESCRIPTION:
    "Genie is an entire derivatives ecosystem without liquidation! Powered by Potentia Protocol.",
  KEYWORDS: [
    "Derivatives",
    "Liquidation",
    "Trading",
    "Perpetuals",
    "DeFi",
    "Power Perpetuals",
    "Leveraged Trading"
  ],
  URL: "https://genie.squaredlabs.io",
  DOMAIN: "https://squaredlabs.io",
  IMAGE: "https://frontend-web-resources.s3.amazonaws.com/og-large.png",
  SITE_NAME: "genie.squaredlabs.io",
  USERNAME: "@squaredlabs_",
  TWITTER: "https://x.com/SquaredLabs_",
  DISCORD: "https://discord.gg/yMe2kkKP",
  TELEGRAM: "https://t.me/squaredlabs",
  DOCS: "https://squaredlabs-io.gitbook.io/squaredlabs.io",
  LOGO: "/images/logo.svg",
  SUPPORT_MAIL: "support@squaredlabs.io"
};

// Header navigation links
export const navigation: {
  name: string;
  href: string;
  target: string;
}[] = [
  { name: "Portfolio", href: "/", target: "" },
  { name: "Pools", href: "/pools", target: "" },
  {
    name: "Blog & Research",
    href: meta.DOCS,
    target: "_blank"
  }
];

// Pools page header social links
export const pools_social: {
  name: string;
  href: string;
  target: string;
  icon: IconType;
}[] = [
  {
    name: "twitter",
    href: meta.TWITTER,
    icon: FaXTwitter,
    target: "_blank"
  },
  {
    name: "discord",
    href: meta.DISCORD,
    icon: FaDiscord,
    target: "_blank"
  },
  {
    name: "telegram",
    href: meta.TELEGRAM,
    icon: FaTelegramPlane,
    target: "_blank"
  }
];

export const CONTRACT_ADDRESSES = {
  POTENTIA_FACTORY_ADDR: "0xff5de5c7aa95ac5f36ec0ec16f376281f505c74c" as Address,
  WETH_ADDR: "0x3e36708aa8b5c027cb3a77f36c4ebdfb689b3bd6" as Address,
  WETH_POOL_ADDR: "0x762c9b8fa27546c0ddc3e49883fc14bb71723eeb" as Address,
  PTOKEN_ADDR: "0x56169607c23501d4ad5ffd16a5a164d007de57f8" as Address,
  WBTC_ADDR: "0xa74ca0170ad066881d6413e3cef5a2dbafde5bdf" as Address,
  WBTC_POOL_ADDR: "0x73d705ff0fc884315a61afd3fde3646fb0a949e6" as Address,
  USDC_ADDR: "0xEA5f22bc4A620b01D48e74B6B69e74F3b2299654" as Address,
  USDC_POOL: "0x390e5b479b9c743f933a4fe50cd0a4fae742fdb0" as Address
};

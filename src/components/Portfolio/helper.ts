import {
  ChartingLibraryWidgetOptions,
  ResolutionString
} from "../../../public/static/charting_library/charting_library";

export const underlyingTokens = ["WETH", "BTC", "USDT", "USDC"];

// Chart widget props
export const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
  // symbol: "Kraken:USDC/USDT",
  interval: "1D" as ResolutionString,
  library_path: "/static/charting_library/",
  timezone: "Etc/UTC",
  locale: "en",
  charts_storage_url: "https://saveload.tradingview.com",
  charts_storage_api_version: "1.1",
  client_id: "squaredlabs.io",
  user_id: "public_user_id",
  fullscreen: false,
  autosize: true,
  symbol_search_request_delay: 2000,
  auto_save_delay: 5,
  theme: "dark",
  toolbar_bg: "#16191F",
  time_frames: [
    {
      text: "1d",
      resolution: "5" as ResolutionString,
      description: "1 Day",
      title: "1D"
    },
    {
      text: "5D",
      resolution: "60" as ResolutionString,
      description: "5 Days",
      title: "5D"
    },
    { text: "1M", resolution: "240" as ResolutionString, description: "1 Month" },
    { text: "3M", resolution: "3D" as ResolutionString, description: "3 Months" },
    { text: "6M", resolution: "1D" as ResolutionString, description: "6 Months" },
    { text: "1Y", resolution: "1D" as ResolutionString, description: "1 Year" },
    { text: "5Y", resolution: "5D" as ResolutionString, description: "5 Years" },
    {
      text: "1000y",
      resolution: "1D" as ResolutionString,
      description: "All",
      title: "All"
    }
  ]
};

export const token_price = {
  price: 71148.1,
  updated_price: 71147.6
};

export const price_day_update = {
  update: 184.2,
  percetage: 0.25
};

export const selected_token = {
  symbol: "BTCUSDT",
  power: 2,
  underlying_asset: "BTC"
};

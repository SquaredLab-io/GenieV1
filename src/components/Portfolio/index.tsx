// Library Imports
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Script from "next/script";
// Component, Util Imports
import AssetStatsBar from "./AssetStatsBar";
import MarketData from "./MarketData";
import Trade from "./Trade";
import TradeTable from "./TradeData";
import { defaultWidgetProps } from "./helper";

// Trading Chart Container imported dynamically
const TradeChart = dynamic(() => import("./TradeChart").then((mod) => mod.default));

const Portfolio = () => {
  const [isScriptReady, setIsScriptReady] = useState(false);

  // TBR
  useEffect(() => console.log("isScriptReady", isScriptReady), [isScriptReady]);

  return (
    <>
      <Script
        src="/static/datafeeds/udf/dist/bundle.js"
        strategy="lazyOnload"
        onReady={() => {
          console.log("Chart script is ready!");
          setIsScriptReady(true);
        }}
      />
      <div className="flex flex-row gap-1 my-1">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-1 max-h-screen">
          <AssetStatsBar />
          {isScriptReady ? (
            <TradeChart {...defaultWidgetProps} />
          ) : (
            <div className="flex flex-col items-center h-full max-h-max justify-center bg-primary-gray">
              <Image
                src="/images/logo.svg"
                height={44}
                width={44}
                alt="logo loading"
                className="animate-bounce"
              />
              <span className="opacity-30 mt-2">preparing chart...</span>
            </div>
          )}
        </div>
        {/* Right Side */}
        <div className="flex-1 max-w-64 xl:max-w-[400px] w-full">
          <Trade />
          <MarketData />
        </div>
      </div>
      <TradeTable />
    </>
  );
};

export default Portfolio;

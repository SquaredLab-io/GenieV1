"use client";

import Image from "next/image";
import { cn } from "@lib/utils";
import { usePower } from "@lib/hooks/usePotentiaMethods";
import { useTradeStore } from "@store/tradeStore";
import { useCurrencyPrice } from "@lib/hooks/useCurrencyPrice";
import toUnits from "@lib/utils/formatting";
import TokenSelectPopover from "@components/common/TokenSelectPopover";

const AssetStatsBar = () => {
  const { selectedPool } = useTradeStore();

  const {
    price,
    isLoading: isPriceLoading,
    volume,
    isVolLoading
  } = useCurrencyPrice(selectedPool.underlyingTokens[0].symbol);
  const { power, isLoading: isPowerLoading } = usePower(selectedPool.poolAddress);

  return (
    <div className="flex flex-row items-center gap-4 w-full bg-primary-gray px-[11px] py-2">
      <button className="group flex flex-row text-left gap-1 justify-start items-center min-w-fit p-2 -m-2">
        <TokenSelectPopover>
          <div className="flex flex-row justify-normal items-center gap-1">
            <div className="hidden sm:flex flex-row items-center max-w-fit -space-x-3">
              {selectedPool.underlyingTokens.map((asset, index) => (
                <div
                  key={index}
                  className="z-0 flex overflow-hidden ring-1 ring-white rounded-full bg-neutral-800"
                >
                  <Image src={asset.icon} alt={asset.symbol} width={36} height={36} />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-y-1 mr-4">
              <p className="inline-flex items-center gap-1">
                <span className="text-base/4 font-semibold">
                  {selectedPool.underlyingTokens.map((asset, index) => (
                    <>
                      <span key={index}>{asset.symbol}</span>
                      {selectedPool.underlyingTokens.length !== index + 1 && (
                        <span className="text-[#9299AA] mx-0">/</span>
                      )}
                    </>
                  ))}
                </span>
                <span className="font-medium text-2xs/[14px] rounded-sm py-px px-[4.5px] text-white bg-text-grad bg-gradient-blue">
                  p = {isPowerLoading ? "..." : power ?? "2"}
                </span>
              </p>
              <span className="text-xs/4 text-light-gray">
                {selectedPool.underlyingTokens[0].symbol} Perpetual
              </span>
            </div>
            <Image
              src="/icons/MenuDropIcon.svg"
              className="opacity-80 group-hover:opacity-100 transition-opacity"
              width={20}
              height={20}
              alt="menu-icon"
            />
          </div>
        </TokenSelectPopover>
      </button>
      <span className="py-5 border-l border-[#25282C]" />
      <div className="flex flex-row items-center gap-10 xl:gap-20 w-full px-[11px] font-medium text-xs/[14px] overflow-visible z-50">
        <div className="flex flex-col items-start justify-between">
          <span className="font-semibold text-base/6 text-positive-green">
            {isPriceLoading ? "loading..." : price}
          </span>
          <span>{isPriceLoading ? "loading..." : price}</span>
        </div>
        <div className="flex flex-col items-start justify-between gap-[4.5px]">
          <span className="font-normal text-xs text-dark-gray">24H Change %</span>
          <p
            className={cn(
              "inline-flex items-center gap-1"
              // price_day_update.update > 0 ? "text-positive-green" : "text-negative-red"
            )}
          >
            -
            {/* <span>
              {price_day_update.update > 0 && "+"}
              {price_day_update.update}
            </span>
            <span>
              ({price_day_update.update > 0 && "+"}
              {price_day_update.percetage}%)
            </span> */}
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-[4.5px]">
          <span className="font-normal text-xs text-dark-gray">24H High</span>
          <span>{price}</span>
        </div>
        <div className="flex flex-col items-start justify-between gap-[4.5px]">
          <span className="font-normal text-xs text-dark-gray">24H Volume</span>
          <span>${toUnits(parseFloat(volume?.top_tier_volume_total), 2)}</span>
        </div>
        {/* <div className="flex flex-col items-start justify-between gap-[4.5px]">
          <span className="font-normal text-xs text-dark-gray">Funding Rate</span>
          <span className="text-gradient-blue">0.0105%</span>
        </div> */}
      </div>
    </div>
  );
};

export default AssetStatsBar;

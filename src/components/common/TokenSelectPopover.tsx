import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PoolOptions, potentiaPoolsList } from "@lib/pools";
import { useTradeStore } from "@store/tradeStore";
import Image from "next/image";

interface PropsType {
  children: React.ReactNode;
}

export default function TokenSelectPopover({ children }: PropsType) {
  const { updateSelectedPool } = useTradeStore((state) => state);
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="font-sans-manrope">
        <h1 className="font-medium text-lg">Select Pool</h1>
        <div className="flex flex-col gap-3 mt-3">
          {potentiaPoolsList.map((pool, index) => (
            <button
              key={pool.symbol}
              onClick={() => {
                if (index === 0) {
                  updateSelectedPool(PoolOptions.weth);
                } else if (index === 1) {
                  updateSelectedPool(PoolOptions.wbtc);
                } else if (index === 2) {
                  updateSelectedPool(PoolOptions.usdc);
                }
              }}
              className="flex flex-row items-center gap-1 py-2 px-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              {pool.underlyingTokens.map((asset, index) => (
                <div
                  key={index}
                  className="z-0 flex overflow-hidden ring-1 ring-white rounded-full bg-neutral-800"
                >
                  <Image src={asset.icon} alt={asset.symbol} width={24} height={24} />
                </div>
              ))}
              {pool.underlyingTokens.map((asset, index) => (
                <>
                  <span key={index}>{asset.symbol}</span>
                  {pool.underlyingTokens.length !== index + 1 && <span>-</span>}
                </>
              ))}
              <span className="font-medium text-2xs/[14px] rounded-sm py-px px-[4.5px] text-white bg-text-grad bg-gradient-blue">
                p = 2
              </span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

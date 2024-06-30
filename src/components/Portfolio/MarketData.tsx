import { underlyingTokens } from "./helper";

const rowStyle = "inline-flex items-center justify-between font-medium text-xs leading-4";

const MarketData = () => {
  return (
    <div className="bg-primary-gray mt-1 py-4 pr-3 pl-2">
      <h3 className="font-normal text-xs mb-4">Market Data</h3>
      <div className="flex flex-col gap-2">
        <p className={rowStyle}>
          <span className="text-[#6D6D6D]">Price</span>
          <span className="font-normal">$0.482</span>
        </p>
        <p className={rowStyle}>
          <span className="text-[#6D6D6D]">Market Cap</span>
          <span className="font-normal">$482M</span>
        </p>
        <p className={rowStyle}>
          <span className="text-[#6D6D6D]">Volume (24h)</span>
          <span className="font-normal">$291M</span>
        </p>
        <p className={rowStyle}>
          <span className="text-[#6D6D6D]">Day Change</span>
          <span className="font-normal">-0.54%</span>
        </p>
        <p className={rowStyle}>
          <span className="text-[#6D6D6D]">Max Total Supply</span>
          <span className="font-normal">$1.5 billion</span>
        </p>
      </div>
    </div>
  );
};

export default MarketData;

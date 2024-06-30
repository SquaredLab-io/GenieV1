import ModalWrapper from "@components/common/Modal";
import { ChangeEvent, useState } from "react";
import { underlyingTokens } from "../helper";
import TokenSlider from "../Trade/TokenSlider";
import { isValidPositive } from "@lib/utils/checkVadility";
import DropDownIcon from "@components/icons/DropDownIcon";
import { usePotentiaSdk } from "@lib/hooks/usePotentiaSdk";
import { useTradeStore } from "@store/tradeStore";

const ClosePositionModal = ({
  open,
  setOpen,
  trigger,
  longPos,
  shortPos,
  isLong
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  trigger?: React.ReactNode;
  longPos: string;
  shortPos: string;
  isLong: boolean;
}) => {
  const [quantity, setQuantity] = useState<string>("");
  // const selectedToken = underlyingTokens[0];
  const [sliderValue, setSliderValue] = useState<number[]>([25]);
  const [isLoading, setIsLoading] = useState(false);

  const { selectedPool } = useTradeStore();

  const { potentia } = usePotentiaSdk();

  const handleSliderInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    // When value is a positive integer and not an invalid number
    const isValid = (isValidPositive(input) && !isNaN(parseFloat(input))) || input === "";
    // Only set the value when it's valid
    if (isValid) {
      setSliderValue([parseFloat(input)]);
    }
  };

  /**
   * Handler for closePosition from SDK
   */
  async function closePositionHandlerSdk() {
    const amount = parseFloat(quantity) * 10 ** 18;
    console.log("Amount", amount);
    setIsLoading(true);
    try {
      const txnHash = await potentia?.closePosition(
        selectedPool.poolAddress,
        BigInt(amount).toString(),
        isLong
      );
      console.log("closePosition hash", txnHash);
    } catch (error) {
      console.error("closePosition Error", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title={<span className="text-base/5 font-semibold">Close Long Position</span>}
      trigger={trigger}
      className="min-w-80 py-3"
    >
      <>
        <div className="flex flex-col gap-2 font-medium text-xs/4 text-[#6D6D6D]">
          <label htmlFor="quantity">Quantity</label>
          <div className="flex flex-col items-start w-full border-spacing-0 rounded-[3px] py-2 pl-3 pr-4 bg-[#1F2228]">
            <div className="inline-flex justify-between items-center w-full">
              <input
                type="number"
                value={quantity}
                placeholder="0"
                onChange={(event) => setQuantity(event.target.value)}
                id="quantity"
                className="bg-transparent p-2 w-full placeholder:text-[#6D6D6D] text-white font-sans-manrope font-semibold text-sm/6 focus:outline-none"
              />
              <span className="font-sans-manrope w-fit text-[#6D6D6D] items-center justify-between rounded-md text-sm">
                {selectedPool.underlyingTokens[0].symbol}
              </span>
            </div>
            <span>Balance: {isLong ? longPos : shortPos}</span>
          </div>
          {/* <TokenSlider
            value={sliderValue}
            setValue={setSliderValue}
            handler={handleSliderInput}
          /> */}
          <hr className="border-b rounded-full border-[#303030] mt-2"></hr>
          <div className="flex flex-col gap-2">
            <p className="inline-flex items-center justify-between w-full">
              <span>Fee (0.555)</span>
              <span className="font-normal text-white">0.25%</span>
            </p>
            <p className="inline-flex items-center justify-between w-full">
              <span>TVL</span>
              <span className="font-normal text-white">0.25%</span>
            </p>
          </div>
          {/* <hr className="border-b rounded-full border-[#303030] mt-2"></hr> */}
          {/* <div className="w-full inline-flex items-center justify-between mt-1 mb-2 text-white">
            <span>Payout</span>
            <div className="inline-flex items-center gap-1">
              <span>0 BTC</span>
              <DropDownIcon className="size-3" />
            </div>
          </div> */}
          <button
            className="bg-[#202832] hover:bg-[#475B72] rounded-[3px] font-bold text-[14px]/6 text-[#3D85C6] text-center py-2 transition-colors duration-200"
            onClick={() => {
              closePositionHandlerSdk();
            }}
          >
            {isLoading ? <span>processing...</span> : <span>Close</span>}
          </button>
        </div>
      </>
    </ModalWrapper>
  );
};

export default ClosePositionModal;

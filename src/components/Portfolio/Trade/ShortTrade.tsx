"use client";

// Library Imports
import { FC, useEffect, useState } from "react";
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract
} from "wagmi";
import { BiSolidDownArrow } from "react-icons/bi";
import { type PotentiaSdk } from "@squaredlab-io/sdk/src";
// Component, Util Imports
import { selected_token, underlyingTokens } from "../helper";
import TokenSlider from "./TokenSlider";
import { getAccountBalance } from "@lib/utils/getAccountBalance";
import { Button } from "@components/ui/button";
import { WethABi } from "@lib/abis";
import { useCurrentPosition } from "@lib/hooks/useCurrentPosition";
import { PositionType } from "@lib/types/enums";
import { sliderValueHandler } from "@lib/utils/sliderValueHandler";
import { isValidPositiveNumber } from "@lib/utils/checkVadility";
import { useTradeStore } from "@store/tradeStore";

interface PropsType {
  potentia?: PotentiaSdk;
}

const ShortTrade: FC<PropsType> = ({ potentia }) => {
  const { selectedPool } = useTradeStore((state) => state);
  const TOKEN_ADDR = selectedPool.underlyingTokens[0].address;

  const [quantity, setQuantity] = useState("");
  const [sliderValue, setSliderValue] = useState<number[]>([25]);

  // Contract Hooks
  const { address, isConnected } = useAccount();
  const { data: userBalance, isLoading: isBalLoading } = useBalance({
    address,
    token: TOKEN_ADDR
  });

  const { data: positionData, isFetching: isPositionFetching } = useCurrentPosition(
    PositionType.short,
    selectedPool.poolAddress
  );

  // Write Hook => Token Approval
  const {
    data: approvalData,
    writeContractAsync: writeApproveToken,
    error: approveError,
    isPending: isApprovePending
  } = useWriteContract();

  /**
   * This handler method approves signers TOKEN_ADDR tokens to be spent on Potentia Protocol
   */
  const approveHandler = async () => {
    const _amount = parseFloat(quantity) * 10 ** 18;
    try {
      await writeApproveToken({
        abi: WethABi,
        address: TOKEN_ADDR,
        functionName: "approve",
        args: [
          selectedPool.poolAddress,
          BigInt(_amount).toString() // Approving as much as input amount only
        ]
      });
    } catch (error) {
      console.log("error while approving", approveError);
    }
  };

  // wait for approval transaction
  const {
    isSuccess: isTxnSuccess,
    isLoading: isTxnLoading,
    isError: isTxnError
  } = useWaitForTransactionReceipt({
    hash: approvalData
  });

  /**
   * Handler for Opening Long Position
   */
  const openShortPositionHandler = async () => {
    const _amount = parseFloat(quantity) * 10 ** 18;

    try {
      const txnHash = await potentia?.openPosition(
        selectedPool.poolAddress, // poolAddress
        BigInt(_amount).toString(), // amt
        false // isLong
      );
      console.log("txnHash", txnHash);
    } catch (error) {
      console.log("// error in open_short", error);
    } finally {
      console.log("open_short_position amount", _amount);
    }
  };

  useEffect(() => {
    // Executes if Approve Successful
    console.log("approve txn final status", isTxnSuccess);
    if (isTxnSuccess) {
      console.log("Token is approved for the selected amount!");
      openShortPositionHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTxnSuccess]);

  return (
    <div className="flex flex-col font-medium text-xs leading-4">
      <div className="flex flex-col gap-2 pt-[14px] pb-2 pl-2 pr-3 border-b border-[#303030]">
        <p className="inline-flex items-center justify-between w-full">
          <span className="text-[#949E9C]">Balance</span>
          <span className="font-normal">
            {getAccountBalance(userBalance, isBalLoading)}
          </span>
        </p>
        <p className="inline-flex items-center justify-between w-full">
          <span className="text-[#949E9C]">Current Position</span>
          {isPositionFetching ? (
            <span>Fetching...</span>
          ) : (
            <span className="font-normal">
              {positionData.formatted} {selectedPool.underlyingTokens[0].symbol}
              <sup>{selected_token.power}</sup>
            </span>
          )}
        </p>
        <form
          className="flex flex-col w-full gap-2 mt-3"
          autoComplete="off"
          autoCapitalize="off"
          name="token-quantity"
        >
          <label htmlFor="quantity" className="text-[#A5A5A5]">
            Quantity
          </label>
          <div className="inline-flex w-full justify-between rounded-[3px] py-2 px-4 bg-[#242427]">
            <input
              type="number"
              value={quantity}
              placeholder="0"
              onChange={(event) => setQuantity(event.target.value)}
              id="quantity"
              className="bg-transparent p-2 w-full placeholder:text-[#6D6D6D] text-white font-sans-manrope font-semibold text-base leading-6 focus:outline-none"
            />
            <Button
              variant="ghost"
              className="hover:bg-transparent px-0 flex font-sans-manrope h-10 w-fit text-[#6D6D6D] items-center justify-between rounded-md text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
            >
              <span className="text-nowrap">
                {selectedPool.underlyingTokens[0].symbol}
              </span>
              <BiSolidDownArrow className="h-3 w-3 ml-4" color="#9D9D9D" />
            </Button>
          </div>
        </form>
        {/* Slider Component */}
        <TokenSlider
          value={sliderValue}
          setValue={setSliderValue}
          handler={(event) => sliderValueHandler(event, setSliderValue)}
        />
      </div>
      <div className="flex flex-col gap-2 pt-[14px] pb-6 pl-2 pr-3">
        <button
          disabled={
            !isConnected ||
            !userBalance ||
            isTxnLoading ||
            !isValidPositiveNumber(quantity)
          } // conditions to Long Button
          className="bg-[#202832] hover:bg-[#232c38] rounded-[3px] font-sans-manrope font-bold text-[14px] leading-6 text-[#3D85C6] text-center py-[14px] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-[#202832]"
          onClick={() => {
            approveHandler();
          }}
        >
          Short
        </button>
        <div className="flex flex-col gap-2">
          <p className="inline-flex items-center justify-between w-full">
            <span className="text-[#6D6D6D]">Fee (0.555)</span>
            <span className="font-normal">0.25%</span>
          </p>
          <p className="inline-flex items-center justify-between w-full">
            <span className="text-[#6D6D6D]">TVL</span>
            <span className="font-normal">0.25%</span>
          </p>
          <p className="inline-flex items-center justify-between w-full">
            <span className="text-[#6D6D6D]">Volume (24h)</span>
            <span className="font-normal">0.25%</span>
          </p>
          <p className="inline-flex items-center justify-between w-full">
            <span className="text-[#6D6D6D]">Conversion Fee</span>
            <span className="font-normal">0.25%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShortTrade;

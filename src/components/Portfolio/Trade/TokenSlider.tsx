"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Slider } from "@components/ui/slider";
import { cn } from "@lib/utils";

interface PropsType {
  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TokenSlider = ({ value, setValue, handler }: PropsType) => {
  return (
    <div className="mt-1 w-full inline-flex gap-4">
      <Slider
        defaultValue={value}
        value={value[0] ? value : [0]}
        max={100}
        step={1}
        onValueChange={(e) => setValue(e)}
      />
      <div className="relative max-w-16">
        <input
          type="number"
          value={value[0]}
          placeholder={"0"}
          onChange={handler}
          id="quantity"
          className="py-0 pl-4 pr-6 w-full text-right rounded-base bg-[#242427] placeholder:text-[#6D6D6D] text-white font-sans-manrope font-normal text-xs leading-[31px] focus:outline-none ring-1 ring-[#2F2F2F]"
        />
        <span
          className={cn(
            "absolute my-auto top-0 bottom-0 h-fit right-2",
            value[0] > 0 && ""
          )}
        >
          %
        </span>
      </div>
    </div>
  );
};

export default TokenSlider;

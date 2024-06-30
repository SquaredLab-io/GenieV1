"use client";

import { Button } from "@components/ui/button";
import { pools_social } from "@lib/constants";
import Link from "next/link";
import TooltipX from "@components/common/TooltipX";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between items-center bg-primary-gray py-[90px] px-16 lg:px-24 pb-[77px]">
      <div className="flex flex-col gap-4 text-center md:text-left max-w-[523px] font-sans-manrope">
        <h1 className="font-normal text-4xl/10 md:text-5xl/[52.8px]">
          Shape the future with <span className="text-gradient-blue">powerful</span>{" "}
          derivatives.
        </h1>
        <p className="font-extralight text-xl text-[#B5B5B5]">
          Become a market maker and get rewarded! Contribute to the pool&apos;s activity
          and earn a cut of the trading fees. Plus, enjoy bonus incentives when programs
          are active!
        </p>
        <div className="inline-flex justify-center md:justify-start items-center gap-4 mt-8">
          <TooltipX content="Coming Soon">
            <Button disabled={true}>Create Pools</Button>
          </TooltipX>
          <Link href="/pool">
            <Button variant="outline">Add Liquidity</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row md:flex-col gap-7 max-w-fit h-full">
        {pools_social.map((social, index) => (
          <a
            key={social.name}
            className="group h-11 w-11 flex items-center justify-center rounded-full border border-off-white hover:border-white transition-all hover:scale-105 active:scale-100"
            href={social.href}
            target="_blank"
            referrerPolicy="strict-origin"
          >
            <social.icon
              size={22}
              className="text-off-white group-hover:text-white transition-colors"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;

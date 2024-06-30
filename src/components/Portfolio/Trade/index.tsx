"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { cn } from "@lib/utils";
import LongTrade from "./LongTrade";
import ShortTrade from "./ShortTrade";
import { usePotentiaSdk } from "@lib/hooks/usePotentiaSdk";

enum TradeOptions {
  long = "long",
  short = "short"
}

const tabsStyle =
  "w-1/2 py-[17px] text-center px-3 text-sm font-medium data-[state=active]:border border-pure-blue data-[state=active]:bg-gradient-to-r data-[state=active]:text-transparent data-[state=active]:bg-clip-text data-[state=active]:from-pure-cyan data-[state=active]:to-pure-blue";

const Trade = () => {
  const { potentia } = usePotentiaSdk();
  return (
    <div className="flex flex-col bg-primary-gray">
      <Tabs defaultValue={TradeOptions.long} className="w-full">
        <TabsList className="w-full flex flex-row items-center font-sans-manrope font-semibold text-base border-b-[0.5px] border-[#303030]">
          <TabsTrigger
            value={TradeOptions.long}
            className={cn("rounded-r-[3px]", tabsStyle)}
          >
            Long
          </TabsTrigger>
          <TabsTrigger
            value={TradeOptions.short}
            className={cn("rounded-l-[3px]", tabsStyle)}
          >
            Short
          </TabsTrigger>
        </TabsList>
        <TabsContent value={TradeOptions.long}>
          <LongTrade potentia={potentia} />
        </TabsContent>
        <TabsContent value={TradeOptions.short}>
          <ShortTrade potentia={potentia} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Trade;

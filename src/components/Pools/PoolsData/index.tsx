"use client";

import Image from "next/image";
import { TabsList } from "@radix-ui/react-tabs";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@components/ui/button";
import { Tabs, TabsContent, TabsTrigger } from "@components/ui/tabs";
import AllPoolsTable from "./AllPoolsTable";
import { Amount, TableOptions, Token, UserPoolType } from "./helper";
import toUnits, { toDollarUnits } from "@lib/utils/formatting";
import UserPoolsTable from "./UserPoolsTable";
import TrxnPoolsTable from "./TxnPoolsTable";
import PoolMenu from "./PoolMenu";
import { cn } from "@lib/utils";
// import { useTradeStore } from "@store/tradeStore";
import { potentiaPoolsList } from "@lib/pools";
import { Pool } from "@lib/types/common";
import { usePools } from "@lib/hooks/usePools";
import { formatUnits } from "viem";

export const userPoolsColumns: ColumnDef<UserPoolType>[] = [
  {
    accessorKey: "assets",
    header: () => (
      <div className="pl-10 py-7">
        <span>Name</span>
      </div>
    ),
    cell: ({ row }) => {
      const { assets, power, protocol, network } = row.original;
      return (
        <div className="whitespace-nowrap flex flex-row gap-2 text-left font-medium pl-9 py-5">
          <div className="hidden sm:flex flex-row items-center max-w-fit -space-x-2">
            {assets.map((asset: Token) => (
              <div
                key={asset.symbol}
                className="z-0 flex overflow-hidden ring-1 ring-white rounded-full bg-neutral-800"
              >
                <Image src={asset.imgSrc} alt={asset.symbol} width={26} height={26} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-left">
            <div className="inline-flex gap-2">
              <p className="font-extrabold text-sm leading-5">
                {assets.map((asset: Token, index) => (
                  <>
                    <span key={index}>{asset.symbol}</span>
                    {assets.length !== index + 1 && (
                      <span className="text-[#9299AA] mx-1">/</span>
                    )}
                  </>
                ))}
              </p>
              <p className="font-medium text-xs leading-3 bg-[#1A3B00] py-[4.5px] px-[9px] rounded-md">
                p = {power}
              </p>
            </div>
            <div className="font-normal text-xs leading-5 text-[#6D6D6D]">
              <p>
                {protocol} • {network}
              </p>
            </div>
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: "historical_fees",
    header: () => <span className="pl-10">Historical Pool Fees</span>,
    cell: ({ row }) => {
      return <span className="pl-10 opacity-50">Chart here</span>;
    }
  },
  {
    accessorKey: "totalAmount",
    header: () => <span className="pl-10">Total Amount</span>,
    cell: ({ row }) => {
      const total: Amount = row.getValue("totalAmount");
      const amount = parseFloat(total.value);
      const growth = parseFloat(total.growth);
      return (
        <div className="pl-10 inline-flex gap-1">
          <span>{toDollarUnits(amount, 2)}</span>
          <span className={cn(growth > 0 ? "text-positive-green" : "text-negative-red")}>
            {growth}%
          </span>
        </div>
      );
    }
  },
  {
    accessorKey: "action",
    header: () => <span className="sr-only">Action</span>,
    cell: ({ row }) => {
      return (
        <div className="inline-flex gap-8">
          <Button
            onClick={() => {}}
            className="py-auto px-2 ml-11 border"
            size="lg"
            variant="default-outline"
          >
            Deposit
          </Button>
          <Button
            onClick={() => {}}
            className="py-auto px-2 ml-11 border"
            size="lg"
            variant="outline"
          >
            Withdraw
          </Button>
        </div>
      );
    }
  }
];

const PoolsData = () => {
  const { pools, isFetching } = usePools();

  const poolsColumns: ColumnDef<Pool>[] = [
    {
      id: "assets",
      accessorKey: "assets",
      header: () => (
        <div className="pl-10 py-7">
          <span>Name</span>
        </div>
      ),
      cell: ({ row }) => {
        const { underlyingTokens, power, network } = row.original;
        return (
          <div className="whitespace-nowrap flex flex-row gap-2 text-left font-medium pl-9 py-5">
            <div className="hidden sm:flex flex-row items-center max-w-fit -space-x-2">
              {underlyingTokens.map((asset) => (
                <div
                  key={asset.symbol}
                  className="z-0 flex overflow-hidden ring-1 ring-white rounded-full bg-neutral-800"
                >
                  <Image src={asset.icon} alt={asset.symbol} width={26} height={26} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1 text-left">
              <div className="inline-flex gap-2">
                <p className="font-extrabold text-sm leading-5">
                  {underlyingTokens.map((asset, index) => (
                    <>
                      <span key={index}>{asset.symbol}</span>
                      {underlyingTokens.length !== index + 1 && (
                        <span className="text-[#9299AA] mx-1">/</span>
                      )}
                    </>
                  ))}
                </p>
                <p className="font-medium text-xs leading-3 bg-[#1A3B00] py-[4.5px] px-[9px] rounded-md">
                  p = {power}
                </p>
              </div>
              <div className="font-normal text-xs leading-5 text-[#6D6D6D]">
                <p>
                  {"Potentia V1"} • {network}
                </p>
              </div>
            </div>
          </div>
        );
      }
    },
    {
      id: "age",
      accessorKey: "age",
      header: () => <span className="pl-10">Age</span>,
      cell: ({ row }) => {
        return <span className="pl-10">{row.original.age}</span>;
      }
    },
    {
      id: "tvl",
      accessorKey: "tvl",
      header: () => <span className="pl-10">TVL</span>,
      cell: ({ row }) => {
        const tvl = parseFloat(row.getValue("tvl"));
        const { underlyingTokens } = row.original;
        return (
          <span className="pl-10">
            {toUnits(tvl, 2)} {underlyingTokens[0].symbol}
          </span>
        );
      }
    },
    {
      id: "volume",
      accessorKey: "volume",
      header: () => <span className="pl-10">Volume (30d)</span>,
      cell: ({ row }) => {
        const vol: Amount = row.getValue("volume");
        const decimals = row.original.decimals;
        const value = parseFloat(vol.value);
        const growth = parseFloat(vol.growth);
        return (
          <div className="pl-10 inline-flex gap-1">
            <span>{value / 10 ** decimals}</span>
            {growth !== 0 && (
              <span
                className={cn(growth > 0 ? "text-positive-green" : "text-negative-red")}
              >
                {growth}%
              </span>
            )}
          </div>
        );
      }
    },
    {
      id: "fee",
      accessorKey: "fee",
      header: () => <span className="pl-10">Fee (30d)</span>,
      cell: ({ row }) => {
        const fee: Amount = row.getValue("fee");
        const value = parseFloat(fee.value);
        const growth = parseFloat(fee.growth);
        return (
          <div className="pl-10 inline-flex gap-1">
            <span>{toDollarUnits(value, 2)}</span>
            {growth !== 0 && (
              <span
                className={cn(growth > 0 ? "text-positive-green" : "text-negative-red")}
              >
                {growth}%
              </span>
            )}
          </div>
        );
      }
    },
    {
      id: "action",
      accessorKey: "action",
      header: () => <span className="pl-10">Action</span>,
      cell: ({ row }) => {
        return (
          <div className="py-auto px-2 ml-11">
            <PoolMenu pool={row.original} />
          </div>
        );
      }
    }
  ];

  const activeTabStyle =
    "data-[state=active]:bg-gradient-to-r data-[state=active]:text-transparent data-[state=active]:bg-clip-text data-[state=active]:from-pure-cyan data-[state=active]:to-pure-blue";

  return (
    <div className="pt-9 pb-20 px-16 lg:px-24 font-sans-manrope">
      <Tabs defaultValue={TableOptions.all}>
        <TabsList className="inline-flex font-medium text-2xl mb-8">
          <TabsTrigger value={TableOptions.all} className={cn(activeTabStyle)}>
            All Pools
          </TabsTrigger>
          <div className="h-8 w-[1px] bg-white/25 mx-4" />
          <TabsTrigger value={TableOptions.my} className={cn(activeTabStyle)}>
            My Pools
          </TabsTrigger>
          <div className="h-8 w-[1px] bg-white/25 mx-4" />
          <TabsTrigger value={TableOptions.trxn} className={cn(activeTabStyle)}>
            Transactions
          </TabsTrigger>
        </TabsList>
        <TabsContent value={TableOptions.all}>
          <AllPoolsTable columns={poolsColumns} data={potentiaPoolsList} />
        </TabsContent>
        <TabsContent value={TableOptions.my}>
          <UserPoolsTable columns={userPoolsColumns} data={[]} />
        </TabsContent>
        <TabsContent value={TableOptions.trxn}>
          <TrxnPoolsTable columns={poolsColumns} data={[]} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PoolsData;

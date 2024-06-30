"use client";

import Hero from "@components/Pools/Hero";
import PoolsData from "@components/Pools/PoolsData";
import { useCurrencyPrice } from "@lib/hooks/useCurrencyPrice";

export default function Pools() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <PoolsData />
    </main>
  );
}

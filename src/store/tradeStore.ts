import { PoolOptions, potentiaPools } from "@lib/pools";
import { Pool, UnderlyingToken } from "@lib/types/common";
// import { Address } from "viem";
import { create } from "zustand";

interface iTrade {
  selectedPool: Pool;
  SELECTED_TOKEN: () => UnderlyingToken;
  isPositionModalOpen: boolean;
  updateSelectedPool: (value: PoolOptions) => void;
  setIsPositionModalOpen: (value: boolean) => void;
  overviewPool: Pool;
  updateOverviewPool: (value: PoolOptions) => void;
}

export const useTradeStore = create<iTrade>((set, get) => ({
  // states
  selectedPool: potentiaPools[PoolOptions.weth],
  overviewPool: potentiaPools[PoolOptions.weth],
  SELECTED_TOKEN: () => {
    const state = get();
    return state.selectedPool.underlyingTokens[0];
  },
  isPositionModalOpen: false,
  // actions
  updateSelectedPool: (newPool: PoolOptions) =>
    set(() => ({
      selectedPool: potentiaPools[newPool]
    })),
  updateOverviewPool: (newPool: PoolOptions) =>
    set(() => ({
      overviewPool: potentiaPools[newPool]
    })),
  setIsPositionModalOpen: (updatedState: boolean) =>
    set(() => ({
      isPositionModalOpen: updatedState
    }))
}));

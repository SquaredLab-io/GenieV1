import { create } from "zustand";

interface iGlobal {}

export const useGlobalStore = create<iGlobal>((set) => ({}));

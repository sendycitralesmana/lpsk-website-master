"use client";

import { createFilterStore } from "@/lib/zustand/stores/filter";
import { type ReactNode, createContext, useRef } from "react";

export type FilterStoreApi = ReturnType<typeof createFilterStore>;

export const FilterStoreContext = createContext<FilterStoreApi | undefined>(
  undefined
);

export interface FilterStoreProviderProps {
  children: ReactNode;
}

export const FilterStoreProvider = ({ children }: FilterStoreProviderProps) => {
  const storeRef = useRef<FilterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createFilterStore();
  }

  return (
    <FilterStoreContext.Provider value={storeRef.current}>
      {children}
    </FilterStoreContext.Provider>
  );
};

import { FilterStore } from "@/lib/zustand/types/filter";
import { useContext } from "react";
import { useStore } from "zustand";
import { FilterStoreContext } from "../provider/filter-store";

export const useFilterStore = <T,>(selector: (store: FilterStore) => T): T => {
  const filterStoreContext = useContext(FilterStoreContext);

  if (!filterStoreContext) {
    throw new Error(`useFilterStore must be used within FilterStoreProvider`);
  }

  return useStore(filterStoreContext, selector);
};

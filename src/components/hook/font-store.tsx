import { FontStore } from "@/lib/zustand/types/font";
import { useContext } from "react";
import { useStore } from "zustand";
import { FontStoreContext } from "../provider/font-store";

export const useFontStore = <T,>(selector: (store: FontStore) => T): T => {
  const fontStoreContext = useContext(FontStoreContext);

  if (!fontStoreContext) {
    throw new Error(`useFontStore must be used within FontStoreProvider`);
  }

  return useStore(fontStoreContext, selector);
};

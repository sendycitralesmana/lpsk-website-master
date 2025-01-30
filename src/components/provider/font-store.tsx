"use client";

import { createFontStore } from "@/lib/zustand/stores/font";
import { type ReactNode, createContext, useRef } from "react";

export type FontStoreApi = ReturnType<typeof createFontStore>;

export const FontStoreContext = createContext<FontStoreApi | undefined>(
  undefined
);

export interface FontStoreProviderProps {
  children: ReactNode;
}

export const FontStoreProvider = ({ children }: FontStoreProviderProps) => {
  const storeRef = useRef<FontStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createFontStore();
  }

  return (
    <FontStoreContext.Provider value={storeRef.current}>
      {children}
    </FontStoreContext.Provider>
  );
};

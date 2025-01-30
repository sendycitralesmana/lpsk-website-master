"use client";

import { createToolStore } from "@/lib/zustand/stores/tool";
import { type ReactNode, createContext, useRef } from "react";

export type ToolStoreApi = ReturnType<typeof createToolStore>;

export const ToolStoreContext = createContext<ToolStoreApi | undefined>(
  undefined
);

export interface ToolStoreProviderProps {
  children: ReactNode;
}

export const ToolStoreProvider = ({ children }: ToolStoreProviderProps) => {
  const storeRef = useRef<ToolStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createToolStore();
  }

  return (
    <ToolStoreContext.Provider value={storeRef.current}>
      {children}
    </ToolStoreContext.Provider>
  );
};

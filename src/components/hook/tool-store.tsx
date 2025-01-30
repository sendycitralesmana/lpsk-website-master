import { ToolStore } from "@/lib/zustand/types/tool";
import { useContext } from "react";
import { useStore } from "zustand";
import { ToolStoreContext } from "../provider/tool-store";

export const useToolStore = <T,>(selector: (store: ToolStore) => T): T => {
  const toolStoreContext = useContext(ToolStoreContext);

  if (!toolStoreContext) {
    throw new Error(`useToolStore must be used within ToolStoreProvider`);
  }

  return useStore(toolStoreContext, selector);
};

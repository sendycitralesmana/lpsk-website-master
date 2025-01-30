import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ToolState, ToolStore } from "../types/tool";

export const toolInitState: ToolState = {
  hideImages: false,
  highlightLinks: false,
  readText: false,

};

export const createToolStore = (initState: ToolState = toolInitState) => {
  return create(
    persist<ToolStore>(
      (set) => ({
        ...initState,
        setHideImages: () =>
          set((state) => ({ hideImages: !state.hideImages })),
        setHighlightLinks: () =>
          set((state) => ({ highlightLinks: !state.highlightLinks })),
        setReadText: () => set((state) => ({ readText: !state.readText })),
        setDefault: () => set(() => ({ ...initState })),
      }),
      {
        name: "tool-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};

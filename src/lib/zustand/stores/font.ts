import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { FontState, FontStore } from "../types/font";

export const defaultFontInitState: FontState = {
  size: 0,
  spacing: 0,
  leading: 0,
  family: 0,
  maxSize: 3,
  maxSpacing: 3,
  maxLeading: 4,
  maxFamily: 3,
};

export const createFontStore = () => {
  return create(
    persist<FontStore>(
      (set) => ({
        ...defaultFontInitState,
        setSize: () =>
          set((state) => ({
            size: state.size < state.maxSize ? state.size + 1 : 0,
          })),
        setSpacing: () =>
          set((state) => ({
            spacing: state.spacing < state.maxSpacing ? state.spacing + 1 : 0,
          })),
        setLeading: () =>
          set((state) => ({
            leading: state.leading < state.maxLeading ? state.leading + 1 : 0,
          })),
        setFamily: () =>
          set((state) => ({
            family: state.family < state.maxFamily ? state.family + 1 : 0,
          })),
        setDefault: () => set(() => ({ ...defaultFontInitState })),
      }),
      {
        name: "font-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};

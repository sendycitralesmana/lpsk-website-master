import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { FilterState, FilterStore } from "../types/filter";


export const defaultFilterInitState: FilterState = {
    contrast: 0,
    sepia: 0,
    grayscale: 0,
    invert: 0,
    saturate: 0,
    hueRotate: 0,
    brightness: 0,
    maxContrast: 2,
    maxSepia: 1,
    maxGrayscale: 1,
    maxInvert: 1,
    maxSaturate: 2,
    maxHueRotate: 5,
    maxBrightness: 2,
}

export const createFilterStore = (filterInitState: FilterState = defaultFilterInitState) => {

    return create(persist<FilterStore>(
        (set) => ({
            ...filterInitState,
            setContrast: () => set((state) => ({ contrast: state.contrast < state.maxContrast ? state.contrast + 1 : 0 })),
            setSepia: () => set((state) => ({ sepia: state.sepia < state.maxSepia ? state.sepia + 1 : 0 })),
            setGrayscale: () => set((state) => ({ grayscale: state.grayscale < state.maxGrayscale ? state.grayscale + 1 : 0 })),
            setInvert: () => set((state) => ({ invert: state.invert < state.maxInvert ? state.invert + 1 : 0 })),
            setSaturate: () => set((state) => ({ saturate: state.saturate < state.maxSaturate ? state.saturate + 1 : 0 })),
            setHueRotate: () => set((state) => ({ hueRotate: state.hueRotate < state.maxHueRotate ? state.hueRotate + 1 : 0 })),
            setBrightness: () => set((state) => ({ brightness: state.brightness < state.maxBrightness ? state.brightness + 1 : 0 })),
            setDefault: () => set(() => (defaultFilterInitState)),  
        }),
        {
            name: "filter-store",
            storage: createJSONStorage(() => localStorage),
        }
    ))
}


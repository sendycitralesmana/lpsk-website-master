
export type FilterState = {
    contrast: number;
    sepia: number;
    grayscale: number;
    invert: number;
    saturate: number;
    hueRotate: number;
    brightness: number;
    maxContrast: number;
    maxSepia: number;
    maxGrayscale: number;
    maxInvert: number;
    maxSaturate: number;
    maxHueRotate: number;
    maxBrightness: number;
};

export type FilterAction = {
    setContrast: () => void;
    setSepia: () => void;
    setGrayscale: () => void;
    setInvert: () => void;
    setSaturate: () => void;
    setHueRotate: () => void;
    setBrightness: () => void;
    setDefault: () => void;
}

export type FilterStore = FilterState & FilterAction;
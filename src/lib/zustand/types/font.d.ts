export type FontState = {
    size: number;
    spacing: number;
    leading: number;
    family: number;
    maxSize: number;
    maxSpacing: number;
    maxLeading: number;
    maxFamily: number;
  };
  
  export type FontAction = {
    setSize: () => void;
    setSpacing: () => void;
    setLeading: () => void;
    setFamily: () => void;
    setDefault: () => void;
  };
  
  export type FontStore = FontState & FontAction;
export type ToolState = {
    hideImages: boolean,
    highlightLinks: boolean,
    readText: boolean,
};

export type ToolAction = {
    setHideImages: () => void,
    setHighlightLinks: () => void,
    setReadText: () => void,
    setDefault: () => void;
};

export type ToolStore = ToolState & ToolAction;
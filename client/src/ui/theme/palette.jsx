import typography from "./typography";

export const lightPalette = {
  mode: "light",
  primary: { main: "#1976d2" },
  background: {
    default: "#EBE9E9",
    paper: "#ffffff",
  },
  foreground: {
    default: "#FFFFFFE6",
  },
  typography: {
    title: "#111111",
    subtitle: "#555555",
    body: "#333333",
    danger: "#D32F2F",
  },
  textfield: {
    background: "#F0F5FF",
    placeholderColor: "#9f9f9fff",
  },
  hover: {
    primary: "#0000000A",
  },
};

export const darkPalette = {
  mode: "dark",
  primary: { main: "#90caf9" },
  background: {
    default: "#112143",
    paper: "#1e1e1e",
  },
  foreground: {
    default: "#12254fff",
  },
  typography: {
    title: "#FFFFFF",
    subtitle: "#AAAAAA",
    body: "#CCCCCC",
    danger: "#FF6B6B",
  },
  textfield: {
    background: "#12245e",
    placeholderColor: "#a8b4d0",
  },
  hover: {
    primary: "#FFFFFF14",
  },
};

const palette = (mode = "light") => {
  return mode === "light" ? lightPalette : darkPalette;
};

export default palette;

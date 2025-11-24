import { createContext } from "react";

const ThemeModeProvider = createContext({
  mode: "light",
  toggleMode: () => {},
});

export default ThemeModeProvider;

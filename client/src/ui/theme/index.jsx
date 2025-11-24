import { createTheme } from "@mui/material/styles";
import palette from "./palette.jsx";
import typography from "./typography.jsx";
import components from "./components.jsx";

export const getTheme = (mode = "light") => {
  return createTheme({
    palette: palette(mode),
    typography,
    components,
  });
};

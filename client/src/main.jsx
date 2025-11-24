import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { RouterProvider } from "react-router-dom";
import router from "./app/routes/router";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./ui/theme/index";
import ThemeModeProvider from "./app/providers/ThemeModeProvider";

const Root = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <StrictMode>
      <ThemeModeProvider.Provider value={{ mode, toggleMode }}>
        <ThemeProvider theme={getTheme(mode)}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ThemeModeProvider.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);

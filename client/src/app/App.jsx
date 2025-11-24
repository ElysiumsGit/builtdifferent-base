import { Box, Typography, useMediaQuery } from "@mui/material";
import Header from "../features/auth/components/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../features/auth/components/Navbar";
import MainLayout from "../ui/layout/MainLayout";
import { useState } from "react";

function App() {
  const [hideNavbar, setHideNavbar] = useState(true);

  return (
    <Box height="100vh" overflow="hidden">
      <Header hideNav={() => setHideNavbar(!hideNavbar)} />

      <Box display="flex" height="calc(100vh - 64px)">
        {/* Sidebar */}
        {hideNavbar && (
          <Box flex={1}>
            <Navbar />
          </Box>
        )}

        {/* Scrollable container for Outlet */}
        <Box
          flex={4}
          sx={{
            overflowY: "auto",

            // Webkit (Chrome, Edge, Safari)
            "&::-webkit-scrollbar": {
              width: "5px", // thin line
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent", // hide the track
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "blue", // blue scrollbar
              borderRadius: "5px",
              border: "none", // remove any border
            },
            "&::-webkit-scrollbar-button": {
              display: "none", // hide arrows (top & bottom)
            },

            // Firefox
            scrollbarWidth: "thin",
            scrollbarColor: "blue transparent",
          }}
        >
          <MainLayout>
            <Outlet />
          </MainLayout>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

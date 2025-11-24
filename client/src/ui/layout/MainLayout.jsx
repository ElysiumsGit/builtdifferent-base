import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const MainLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      paddingX={3}
      paddingY={2}
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;

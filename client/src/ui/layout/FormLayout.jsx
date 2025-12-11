import { Box, useTheme } from "@mui/material";
import React from "react";

const FormLayout = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      {...props}
      sx={{
        padding: 2,
        borderRadius: 2,
        backgroundColor: theme.palette.foreground.default,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default FormLayout;

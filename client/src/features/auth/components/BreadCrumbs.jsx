import { Box, useTheme } from "@mui/material";
import React from "react";
import MyBreadCrumbs from "../../../ui/components/BreadCrumbs/MyBreadCrumbs";
import MyTypography from "../../../ui/components/Typography/MyTypography";

const BreadCrumbs = ({ title = "User List" }) => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        backgroundColor: theme.palette.foreground.default,
        padding: 2,
        borderRadius: 2,
      }}
    >
      <MyTypography variant={"h6"}>{title}</MyTypography>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <MyBreadCrumbs />
      </Box>
    </Box>
  );
};

export default BreadCrumbs;

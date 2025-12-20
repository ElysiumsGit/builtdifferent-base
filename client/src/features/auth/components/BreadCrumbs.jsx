import { Box, useTheme } from "@mui/material";
import React from "react";
import MyBreadCrumbs from "../../../ui/components/BreadCrumbs/MyBreadCrumbs";
import MyTypography from "../../../ui/components/Typography/MyTypography";
import HomeIcon from "@mui/icons-material/Home";

const BreadCrumbs = ({
  title = "User List",
  breadCrumbsItems = [{ label: "Home", icon: <HomeIcon /> }],
}) => {
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
        <MyBreadCrumbs items={breadCrumbsItems} />
      </Box>
    </Box>
  );
};

export default BreadCrumbs;

import { Box, ButtonBase, IconButton, Typography } from "@mui/material";
import React from "react";
import MyIconButton from "../../../ui/components/IconButton/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DashBoardCard = () => {
  return (
    <ButtonBase
      sx={{
        width: "100%",
        backgroundColor: "green",
        borderRadius: 2,
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        alignItems={"start"}
        justifyContent={"start"}
        width={"100%"}
        padding={2}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Typography fontWeight={"bold"} color="white">
              Total Users
            </Typography>
            <Typography fontWeight={"bold"} color="white" fontSize={"2rem"}>
              277
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight={"bold"} color="white">
              T
            </Typography>
          </Box>
        </Box>
        <Box
          width={"100%"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography color="white">Last Month</Typography>
          <MyIconButton Icon={AccountCircleIcon} />
        </Box>
      </Box>
    </ButtonBase>
  );
};

export default DashBoardCard;

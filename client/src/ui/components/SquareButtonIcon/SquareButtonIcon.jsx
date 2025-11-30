import { useTheme } from "@emotion/react";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { ButtonBase } from "@mui/material";

const MySquareButtonIcon = ({ icon: Icon = TuneIcon }) => {
  const theme = useTheme();

  return (
    <ButtonBase
      sx={{
        width: "40px",
        minWidth: "40px",
        height: "40px",
        borderRadius: 2,
        padding: 0,
        border: `1px solid ${theme.palette.border.default}`,
      }}
    >
      <Icon
        sx={{
          width: "16px",
          height: "16px",
          color: theme.palette.typography.title,
        }}
      />
    </ButtonBase>
  );
};

export default MySquareButtonIcon;

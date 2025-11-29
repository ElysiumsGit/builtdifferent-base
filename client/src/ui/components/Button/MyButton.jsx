import { Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const MyButton = ({
  type = "button",
  buttonText = "Sign In",
  variant = "contained",
  onClick,
  hasIcon = false,
  startIcon: StartIcon = SendIcon, // << IMPORTANT: store the *component*, not JSX
  ...props
}) => {
  return (
    <Button
      type={type}
      startIcon={hasIcon ? <StartIcon /> : null}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {buttonText}
    </Button>
  );
};

export default MyButton;

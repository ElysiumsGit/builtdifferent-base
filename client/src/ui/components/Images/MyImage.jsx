import React from "react";
import { Box } from "@mui/material";

const MyImage = ({
  src,
  alt = "image",
  xs = 10,
  sm = 10,
  md = 10,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        width: {
          xs,
          sm,
          md,
        },
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default MyImage;

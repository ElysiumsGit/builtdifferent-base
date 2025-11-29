import { Typography, useTheme } from "@mui/material";

const MyTypography = ({ variant, type = "body", children, ...props }) => {
  const theme = useTheme();

  return (
    <Typography
      variant={variant}
      color={theme.palette.typography[type]}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default MyTypography;

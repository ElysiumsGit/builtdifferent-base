import { Typography, useTheme } from "@mui/material";

const MyTypography = ({ type = "body", children, ...props }) => {
  const theme = useTheme();

  return (
    <Typography color={theme.palette.typography[type]} {...props}>
      {children}
    </Typography>
  );
};

export default MyTypography;

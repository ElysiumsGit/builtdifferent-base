import { useTheme } from "@mui/material";

const MyIcon = ({ myIcon: IconComponent, sx = {}, ...props }) => {
  const theme = useTheme();
  return (
    <IconComponent
      {...props}
      sx={{ color: theme.palette.typography.title, ...sx }}
    />
  );
};

export default MyIcon;

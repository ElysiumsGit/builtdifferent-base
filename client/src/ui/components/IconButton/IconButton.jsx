import AbcIcon from "@mui/icons-material/Abc";
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const MyIconButton = ({ Icon = AbcIcon, color = "black", onClick }) => {
  const theme = useTheme();

  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: theme.palette.textfield.background,
        border: `1px solid ${theme.palette.border.default}`,
        color,
        width: { xs: "35px", sm: "35px", md: "40px" },
        height: { xs: "35px", sm: "35px", md: "40px" },
      }}
      flexshrink={0}
    >
      <Icon
        sx={{
          color: theme.palette.typography.title,
          fontSize: {
            xs: 16,
            sm: 16,
            md: 16.5,
            lg: 18,
          },
        }}
      />
    </IconButton>
  );
};

export default MyIconButton;

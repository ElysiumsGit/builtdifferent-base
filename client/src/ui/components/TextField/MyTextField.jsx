import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const MyTextField = ({
  placeholder = "Search here...",
  width = "100%",
  hasStartIcon = false,
  hasEndIcon = false,
  iconStart: IconStart = SearchIcon,
  iconEnd: IconEnd = SearchIcon,
  onEndIconClick,
  onChange,
  value,
  name,
  type = "text",
}) => {
  const theme = useTheme();

  return (
    <TextField
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      size="small"
      type={type}
      sx={{
        width,
        borderRadius: "6px",
        backgroundColor: theme.palette.textfield.background,
        "& fieldset": { border: "none" },
      }}
      slotProps={{
        input: {
          startAdornment: hasStartIcon && (
            <InputAdornment position="start">
              <IconStart sx={{ width: 18, height: 18 }} />
            </InputAdornment>
          ),

          endAdornment: hasEndIcon && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={onEndIconClick} edge="end">
                <IconEnd sx={{ width: 18, height: 18 }} />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default MyTextField;

import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import MyTypography from "../Typography/MyTypography";

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
  hasLabel = false,
  label = "label",
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {hasLabel && (
        <MyTypography fontSize={"12px"} marginBottom={1}>
          {label}
        </MyTypography>
      )}
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
          border: `1px solid ${theme.palette.border.default}`,
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
    </Box>
  );
};

export default MyTextField;

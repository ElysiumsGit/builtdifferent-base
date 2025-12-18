import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MyTypography from "../Typography/MyTypography";
import { useTheme } from "@mui/material";

export default function MyDropdown({
  value,
  items = [],
  selectValue,
  hasLabel = false,
  label = "label",
  onChange,
  disabled = false,
}) {
  const theme = useTheme();

  return (
    <Box width={"100%"}>
      {hasLabel && (
        <MyTypography fontSize={"12px"} marginBottom={1}>
          {label}
        </MyTypography>
      )}
      <FormControl fullWidth>
        <Select
          disabled={disabled}
          value={value}
          onChange={onChange}
          displayEmpty
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            PaperProps: {
              sx: {
                maxHeight: 240,
                mt: 1,
                borderRadius: "8px",
                backgroundColor: theme.palette.background.default,
                boxShadow: theme.shadows[3],
              },
            },
          }}
          sx={{
            height: "42px",
            borderRadius: "6px",
            backgroundColor: theme.palette.textfield.background,
            border: `1px solid ${theme.palette.border.default}`,
            "& fieldset": { border: "none" },
          }}
        >
          <MenuItem value="" disabled>
            {selectValue}
          </MenuItem>
          {items.map((data) => (
            <MenuItem
              key={data}
              sx={{ backgroundColor: theme.palette.background.default }}
              value={data}
            >
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

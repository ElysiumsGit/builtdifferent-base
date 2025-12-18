import { Box, useTheme } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { styled } from "@mui/material/styles";
import MyTypography from "../Typography/MyTypography";

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  display: "block",
  boxSizing: "border-box",
  width: "100%",
  borderRadius: "6px",
  backgroundColor: theme.palette.textfield.background,
  border: `1px solid ${theme.palette.border.default}`,
  padding: "12px",
  fontSize: "14px",
  resize: "vertical",
  minHeight: "100px",
  maxHeight: "200px",

  "&:focus": {
    outline: "none",
    borderColor: theme.palette.primary.main,
  },
}));

const MyTextArea = ({
  placeholder = "placeholder",
  hasLabel = false,
  label = "Label",
  onChange,
  value,
}) => {
  return (
    <Box>
      {hasLabel && (
        <MyTypography fontSize="12px" marginBottom={1}>
          {label}
        </MyTypography>
      )}
      <StyledTextarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default MyTextArea;

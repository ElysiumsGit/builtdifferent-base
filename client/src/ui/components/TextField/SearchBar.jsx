import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";

export default function SearchBar() {
  const theme = useTheme();

  return (
    <Paper
      component="form"
      sx={{
        p: "3px 15px",
        display: "flex",
        alignItems: "center",
        width: 216,
        borderRadius: "6px",
        backgroundColor: theme.palette.textfield.background,
        boxShadow: "none",
      }}
    >
      <SearchIcon sx={{ width: "18px", height: "18px" }} />
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          boxShadow: "none",
        }}
        placeholder="Search here..."
      />
    </Paper>
  );
}

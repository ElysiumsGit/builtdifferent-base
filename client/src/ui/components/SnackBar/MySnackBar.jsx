// MySnackbar.jsx
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function MySnackbar({
  open,
  message = "This is a success Alert inside a Snackbar!",
  onClose,
  vertical = "top",
  horizontal = "right",
}) {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

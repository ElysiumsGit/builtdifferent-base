import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MyButton from "../Button/MyButton";
import { Box, Button, ButtonBase, useTheme } from "@mui/material";
import MyTextField from "../TextField/MyTextField";
import MyTypography from "../Typography/MyTypography";
import TuneIcon from "@mui/icons-material/Tune";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import MySquareButtonIcon from "../SquareButtonIcon/SquareButtonIcon";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "role", label: "Role", minWidth: 120 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "joinDate", label: "Join Date", minWidth: 150 },
  { id: "action", label: "Action", minWidth: 150 },
];

function createData(name, email, role, status, joinDate) {
  return { name, email, role, status, joinDate };
}

const rows = [
  createData(
    "John Doe",
    "john.doe@example.com",
    "Admin",
    "Active",
    "2025-01-15"
  ),
  createData(
    "Jane Smith",
    "jane.smith@example.com",
    "Editor",
    "Inactive",
    "2024-11-22"
  ),
  createData(
    "Michael Brown",
    "michael.brown@example.com",
    "Viewer",
    "Active",
    "2025-03-08"
  ),
  createData(
    "Emily Johnson",
    "emily.johnson@example.com",
    "Editor",
    "Active",
    "2025-02-14"
  ),
  createData(
    "David Wilson",
    "david.wilson@example.com",
    "Admin",
    "Inactive",
    "2024-12-01"
  ),
  createData(
    "Sarah Lee",
    "sarah.lee@example.com",
    "Viewer",
    "Active",
    "2025-04-20"
  ),
  createData(
    "Chris Taylor",
    "chris.taylor@example.com",
    "Editor",
    "Active",
    "2025-05-05"
  ),
  createData(
    "Olivia Martinez",
    "olivia.martinez@example.com",
    "Viewer",
    "Inactive",
    "2024-10-30"
  ),
  createData(
    "Daniel Anderson",
    "daniel.anderson@example.com",
    "Admin",
    "Active",
    "2025-06-12"
  ),
  createData(
    "Sophia Thomas",
    "sophia.thomas@example.com",
    "Editor",
    "Active",
    "2025-07-01"
  ),
  createData(
    "Matthew Jackson",
    "matthew.jackson@example.com",
    "Viewer",
    "Active",
    "2025-03-18"
  ),
  createData(
    "Emma White",
    "emma.white@example.com",
    "Editor",
    "Inactive",
    "2024-09-25"
  ),
  createData(
    "James Harris",
    "james.harris@example.com",
    "Admin",
    "Active",
    "2025-08-10"
  ),
  createData(
    "Isabella Martin",
    "isabella.martin@example.com",
    "Viewer",
    "Active",
    "2025-05-22"
  ),
  createData(
    "Benjamin Thompson",
    "benjamin.thompson@example.com",
    "Editor",
    "Inactive",
    "2024-11-12"
  ),
];

export default function MyTable() {
  const theme = useTheme();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box
      padding={2}
      borderRadius={2}
      sx={{ backgroundColor: theme.palette.foreground.default }}
    >
      <MyTypography variant="h6" fontWeight="bold" mb={4}>
        Users
      </MyTypography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box
          display={"flex"}
          gap={1}
          mb={{ xs: 2, md: 0 }}
          alignItems={"center"}
        >
          <MyTextField placeholder="Search..." hasStartIcon width="300px" />
          <MySquareButtonIcon icon={TuneIcon} />
        </Box>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <MySquareButtonIcon icon={LocalPrintshopIcon} />
          <MyButton
            sx={{ width: { xs: "100%" } }}
            borderRadius={2}
            buttonText="Add Button"
          />
        </Box>
      </Box>
      <Paper
        sx={{
          width: "100%",
          boxShadow: "none",
          border: `1px solid ${theme.palette.border.default}`,
          borderRadius: 2,
        }}
      >
        <TableContainer sx={{ borderRadius: 2 }}>
          <Table aria-label="sticky table">
            <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      color: "black",
                    }}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody
              sx={{
                backgroundColor: theme.palette.background.default,
              }}
            >
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => (
                  <TableRow hover tabIndex={-1} key={rowIndex}>
                    {columns.map((column) => {
                      if (column.id === "action") {
                        return (
                          <TableCell key={column.id} align="start">
                            <Box display={"flex"} gap={1}>
                              <ButtonBase
                                sx={{
                                  backgroundColor: "#27BF68",
                                  padding: "8px",
                                  borderRadius: 1,
                                }}
                              >
                                <RemoveRedEyeIcon
                                  sx={{
                                    width: "16px",
                                    height: "16px",
                                    color: "white",
                                  }}
                                />
                              </ButtonBase>
                              <ButtonBase
                                sx={{
                                  backgroundColor: "#27BF68",
                                  padding: "8px",
                                  borderRadius: 1,
                                }}
                              >
                                <EditIcon
                                  sx={{
                                    width: "16px",
                                    height: "16px",
                                    color: "white",
                                  }}
                                />
                              </ButtonBase>
                              <ButtonBase
                                sx={{
                                  backgroundColor: "#27BF68",
                                  padding: "8px",
                                  borderRadius: 1,
                                }}
                              >
                                <DeleteIcon
                                  sx={{
                                    width: "16px",
                                    height: "16px",
                                    color: "white",
                                  }}
                                />
                              </ButtonBase>
                            </Box>
                          </TableCell>
                        );
                      }

                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* ✅ Force only 10 rows per page */}
        <TablePagination
          sx={{
            backgroundColor: theme.palette.background.default,
          }}
          rowsPerPageOptions={[10]} // ✅ Only 10
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

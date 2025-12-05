import React from "react";
import { Box, Grid, IconButton, useTheme } from "@mui/material";
import DashBoardCard from "../features/auth/components/DashBoardCard";
import MyTypography from "../ui/components/Typography/MyTypography";
import MyTable from "../ui/components/Table/MyTable";
import MyPieChart from "../ui/components/PieChart/MyPieChart";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={2} alignItems="stretch">
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <DashBoardCard />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <DashBoardCard />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <DashBoardCard />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <DashBoardCard />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
          <Box
            sx={{
              backgroundColor: theme.palette.foreground.default,
              borderRadius: 2,
              padding: 3,
              width: "100%",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <MyTypography>Total Sales</MyTypography>
              <IconButton
                onClick={() => {}}
                sx={{
                  width: { xs: "35px", sm: "35px", md: "40px" },
                  height: { xs: "35px", sm: "35px", md: "40px" },
                }}
                flexShrink={0}
              >
                <MoreVertIcon sx={{ color: theme.palette.typography.title }} />
              </IconButton>
            </Box>
            <MyTypography sx={{ fontWeight: "bold" }} fontSize={"2rem"}>
              $3,787,681.00
            </MyTypography>
            <MyTypography
              sx={{ color: theme.palette.typography.subtitle }}
              fontSize={"0.9rem"}
            >
              $3,578.90 in last month
            </MyTypography>
            <MyPieChart />
          </Box>
        </Grid>
      </Grid>

      <MyTable />
    </>
  );
};

export default Dashboard;

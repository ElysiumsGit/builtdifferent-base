import React from "react";
import { Box, Grid } from "@mui/material";
import DashBoardCard from "../features/auth/components/DashBoardCard";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={2}>
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
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            height={{ md: "100%", xs: "340px" }}
            sx={{ backgroundColor: "black", borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

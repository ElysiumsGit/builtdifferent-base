import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import BreadCrumbs from "../../features/auth/components/BreadCrumbs";
import PageCard from "../../features/auth/components/PageCard";
import MyTable from "../../ui/components/Table/MyTable";

const UserList = () => {
  return (
    <>
      <BreadCrumbs />
      <Grid container spacing={2}>
        <Grid size={{ md: 3, xs: 12 }}>
          <PageCard />
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <PageCard />
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <PageCard />
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <PageCard />
        </Grid>
      </Grid>
      <MyTable />
    </>
  );
};

export default UserList;

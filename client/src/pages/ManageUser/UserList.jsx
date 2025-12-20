import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import BreadCrumbs from "../../features/auth/components/BreadCrumbs";
import PageCard from "../../features/auth/components/PageCard";
import MyTable from "../../ui/components/Table/MyTable";
import HomeIcon from "@mui/icons-material/Home";

const UserList = () => {
  return (
    <>
      <BreadCrumbs
        title="Add User"
        breadCrumbsItems={[
          { label: "Manage User", icon: <HomeIcon /> },
          { label: "User List", icon: <HomeIcon /> },
        ]}
      />
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

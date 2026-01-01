import { Box, Grid, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import BreadCrumbs from "../../features/auth/components/BreadCrumbs";
import PageCard from "../../features/auth/components/PageCard";
import MyTable from "../../ui/components/Table/MyTable";
import HomeIcon from "@mui/icons-material/Home";
import userStore from "../../app/store/userStore";

const UserList = () => {
  const { users, fetchUsers, loading, error } = userStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    console.log("Delete user with id:", id);
  };

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
      <MyTable
        deleteFunction={() => deleteUser(id)}
        columns={[
          { id: "name", label: "Name" },
          { id: "email", label: "Email" },
          { id: "region", label: "Region" },
          { id: "province", label: "Province" },
          { id: "municipality", label: "Municipality" },
          { id: "barangay", label: "Barangay" },
          { id: "action", label: "Action" },
        ]}
        rows={users.map((user) => ({
          name: `${user.firstName} ${user.middleName || ""} ${user.lastName}`,
          email: user.email,
          region: user.region,
          province: user.province,
          municipality: user.municipality,
          barangay: user.barangay,
          id: user._id,
          handleDelete: () => handleDelete(user._id),
        }))}
      />
    </>
  );
};

export default UserList;

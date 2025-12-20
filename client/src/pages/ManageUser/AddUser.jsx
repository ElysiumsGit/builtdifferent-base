import { Box } from "@mui/material";
import React from "react";
import BreadCrumbs from "../../features/auth/components/BreadCrumbs";
import UserForm from "../../ui/forms/UserForm";
import HomeIcon from "@mui/icons-material/Home";

const AddUser = () => {
  return (
    <>
      <BreadCrumbs
        title="Add User"
        breadCrumbsItems={[
          { label: "Manage User", icon: <HomeIcon /> },
          { label: "Add User", icon: <HomeIcon /> },
        ]}
      />
      <UserForm />
    </>
  );
};

export default AddUser;

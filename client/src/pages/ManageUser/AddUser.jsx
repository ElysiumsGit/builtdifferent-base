import { Box } from "@mui/material";
import React from "react";
import BreadCrumbs from "../../features/auth/components/BreadCrumbs";
import UserForm from "../../ui/forms/UserForm";

const AddUser = () => {
  return (
    <>
      <BreadCrumbs title="Add User" />
      <UserForm />
    </>
  );
};

export default AddUser;

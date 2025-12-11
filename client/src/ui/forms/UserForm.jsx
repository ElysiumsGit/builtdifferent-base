import { Box, useTheme } from "@mui/material";
import React from "react";
import MyTypography from "../components/Typography/MyTypography";
import MyTextField from "../components/TextField/MyTextField";
import FormLayout from "../layout/FormLayout";
import ImageUploadBox from "../../features/auth/components/ImageUploadBox";
import MyButton from "../components/Button/MyButton";

const UserForm = () => {
  const theme = useTheme();

  return (
    <>
      <FormLayout>
        <MyTypography>BASIC INFORMATION</MyTypography>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyTextField hasLabel label="FIRST NAME" placeholder="First Name" />
          <MyTextField hasLabel label="MIDDLE NAME" placeholder="Middle Name" />
          <MyTextField hasLabel label="LAST NAME" placeholder="Last Name" />
          <MyTextField hasLabel label="EXT NAME" placeholder="Ext Name" />
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyTextField hasLabel label="REGION" placeholder="Region" />
          <MyTextField hasLabel label="PROVINCE" placeholder="Province" />
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyTextField
            hasLabel
            label="MUNICIPALITY"
            placeholder="Municipality"
          />
          <MyTextField hasLabel label="BARANGAY" placeholder="Barangay" />
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyTextField
            hasLabel
            label="EMAIL"
            placeholder="Email Address"
            type="email"
          />
        </Box>
      </FormLayout>
      <FormLayout>
        <MyTypography>VALID ID</MyTypography>
        <ImageUploadBox />
        <MyButton buttonText="SUBMIT" />
      </FormLayout>
    </>
  );
};

export default UserForm;

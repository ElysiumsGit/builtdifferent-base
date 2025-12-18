import React from "react";
import FormLayout from "../layout/FormLayout";
import MyTypography from "../components/Typography/MyTypography";
import MyTextField from "../components/TextField/MyTextField";
import MyTextArea from "../components/TextArea/MyTextArea";
import MyDropdown from "../components/Dropdown/MyDropdown";
import { Box } from "@mui/material";
import ImageUploadBox from "../../features/auth/components/ImageUploadBox";
import MyButton from "../components/Button/MyButton";

const ProductForm = () => {
  return (
    <>
      <FormLayout>
        <MyTypography>BASIC INFORMATION</MyTypography>
        <MyTextField label="PRODUCT NAME" hasLabel placeholder="" />
        <MyTextArea placeholder="" hasLabel label="DESCRIPTION" />
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyDropdown hasLabel label="CATEGORY" />
          <MyDropdown hasLabel label="SUB-CATEGORY" />
          <MyTextField label="PRICE" hasLabel placeholder="" />
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyDropdown hasLabel label="CATEGORY" />
          <MyDropdown hasLabel label="SUB-CATEGORY" />
          <MyTextField label="PRICE" hasLabel placeholder="" />
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyDropdown hasLabel label="CATEGORY" />
          <MyDropdown hasLabel label="SUB-CATEGORY" />
          <MyTextField label="PRICE" hasLabel placeholder="" />
        </Box>
      </FormLayout>
      <FormLayout>
        <MyTypography>MEDIA AND PUBLISHED</MyTypography>
        <ImageUploadBox />
        <MyButton buttonText="SUBMIT" />
      </FormLayout>
    </>
  );
};

export default ProductForm;

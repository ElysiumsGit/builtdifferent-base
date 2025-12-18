import { Box, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import MyTypography from "../components/Typography/MyTypography";
import MyTextField from "../components/TextField/MyTextField";
import FormLayout from "../layout/FormLayout";
import ImageUploadBox from "../../features/auth/components/ImageUploadBox";
import MyButton from "../components/Button/MyButton";
import MyDropdown from "../components/Dropdown/MyDropdown";
import useRegionStore from "../../app/store/useRegionStore";
import { fetchRegions } from "../../app/services/regionService";

const UserForm = () => {
  const {
    regions,
    provinces,
    municipalities,
    barangays,
    getRegion,
    getProvince,
    getMunicipality,
    getBarangay,
  } = useRegionStore();
  const [forms, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    extName: "",
    region: { name: "", code: "" },
    province: { name: "", code: "" },
    municipality: { name: "", code: "" },
    barangay: { name: "", code: "" },
    email: "",
  });

  useEffect(() => {
    getRegion();
  }, []);

  useEffect(() => {
    if (forms.region.code) {
      getProvince(forms.region.code);
    }
  }, [forms.region]);

  useEffect(() => {
    if (forms.province.code) {
      getMunicipality(forms.province.code);
    }
  }, [forms.province]);

  useEffect(() => {
    if (forms.municipality.code) {
      getBarangay(forms.municipality.code);
    }
  }, [forms.municipality]);

  const getRegions =
    regions?.data?.map((item) => ({
      name: item.name,
      code: item.code,
    })) || [];

  const getProvinces =
    provinces?.data?.map((item) => ({
      name: item.name,
      code: item.code,
    })) || [];

  const getMunicipalities =
    municipalities?.data?.map((item) => ({
      name: item.name,
      code: item.code,
    })) || [];

  const getBarangays =
    barangays?.data?.map((item) => ({
      name: item.name,
      code: item.code,
    })) || [];

  const handleSubmit = () => {
    const payload = {
      firstName: forms.firstName,
      middleName: forms.middleName,
      lastName: forms.lastName,
      extName: forms.extName,
      region: forms.region.name,
      province: forms.province.name,
      municipality: forms.municipality.name,
      barangay: forms.barangay.name,
      email: forms.email,
    };

    console.log(payload);
  };

  return (
    <>
      <FormLayout>
        <MyTypography>BASIC INFORMATION</MyTypography>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyTextField
            value={forms.firstName}
            onChange={(e) => setForm({ ...forms, firstName: e.target.value })}
            hasLabel
            label="FIRST NAME"
            placeholder="First Name"
          />
          <MyTextField
            value={forms.middleName}
            onChange={(e) => setForm({ ...forms, middleName: e.target.value })}
            hasLabel
            label="MIDDLE NAME"
            placeholder="Middle Name"
          />
          <MyTextField
            value={forms.lastName}
            onChange={(e) => setForm({ ...forms, lastName: e.target.value })}
            hasLabel
            label="LAST NAME"
            placeholder="Last Name"
          />
          <MyTextField
            value={forms.extName}
            onChange={(e) => setForm({ ...forms, extName: e.target.value })}
            hasLabel
            label="EXT NAME"
            placeholder="Ext Name"
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyDropdown
            value={forms.region.name}
            hasLabel
            label="REGION"
            selectValue="Select Region"
            items={getRegions.map((item) => item.name)}
            onChange={(e) => {
              const selected = getRegions.find(
                (data) => data.name === e.target.value
              );
              setForm((prev) => ({
                ...prev,
                region: selected || { name: "", code: "" },
                province: { name: "", code: "" },
                municipality: { name: "", code: "" },
                barangay: { name: "", code: "" },
              }));
            }}
          />

          <MyDropdown
            disabled={!forms.region.code}
            value={forms.province.name}
            hasLabel
            label="PROVINCE"
            selectValue="Select Province"
            items={getProvinces.map((item) => item.name)}
            onChange={(e) => {
              const selected = getProvinces.find(
                (data) => data.name === e.target.value
              );
              setForm((prev) => ({
                ...prev,
                province: selected || { name: "", code: "" },
                municipality: { name: "", code: "" },
                barangay: { name: "", code: "" },
              }));
            }}
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          gap={2}
        >
          <MyDropdown
            disabled={!forms.province.code}
            value={forms.municipality.name}
            hasLabel
            label="MUNICIPALITY"
            selectValue="Select Municipality"
            items={getMunicipalities.map((item) => item.name)}
            onChange={(e) => {
              const selected = getMunicipalities.find(
                (data) => data.name === e.target.value
              );
              setForm((prev) => ({
                ...prev,
                municipality: selected || { name: "", code: "" },
                barangay: { name: "", code: "" },
              }));
            }}
          />

          <MyDropdown
            disabled={!forms.municipality.code}
            value={forms.barangay.name}
            hasLabel
            label="BARANGAY"
            selectValue="Select Barangay"
            items={getBarangays.map((item) => item.name)}
            onChange={(e) => {
              const selected = getBarangays.find(
                (data) => data.name === e.target.value
              );
              setForm((prev) => ({
                ...prev,
                barangay: selected || { name: "", code: "" },
              }));
            }}
          />
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
        <MyButton buttonText="SUBMIT" onClick={handleSubmit} />
      </FormLayout>
    </>
  );
};

export default UserForm;

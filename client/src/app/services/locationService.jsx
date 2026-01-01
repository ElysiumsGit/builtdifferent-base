import axios from "axios";

const BASE_URL = "https://psgc.cloud/api/v2";

export const fetchRegions = async () => {
  const res = await axios.get(`${BASE_URL}/regions`);
  return res.data;
};

export const filterProvince = async (code) => {
  const res = await axios.get(`${BASE_URL}/regions/${code}/provinces`);
  return res.data;
};

export const filterMunicipality = async (code) => {
  const res = await axios.get(
    `${BASE_URL}/provinces/${code}/cities-municipalities`
  );
  return res.data;
};

export const filterBarangay = async (code) => {
  const res = await axios.get(
    `${BASE_URL}/cities-municipalities/${code}/barangays`
  );
  return res.data;
};

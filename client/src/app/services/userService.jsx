import api from "./api";

const BASEURL = "/user";

export const getAllUser = async () => {
  const response = await api.get("/user/read");
  return response;
};

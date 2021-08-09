import axiosClient from "./axiosClient";

const companyApi = {
  getAll: (params) => {
    const url = "/product";
    return axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  }
};
export default companyApi;

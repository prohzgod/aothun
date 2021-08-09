import axiosClient from "./axiosClient";

const authApi = {
  postSignUp: (data) => {
    const url = "/signup";
    return axiosClient.post(url, data);
  },

  postSignIn: (data) => {
    const url = "/signin";
    return axiosClient.post(url, data);
  },
};
export default authApi;

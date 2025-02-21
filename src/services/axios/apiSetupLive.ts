import axios from "axios";
import Cookies from "js-cookie";

const liveApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_LIVE,
});

liveApi.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default liveApi;

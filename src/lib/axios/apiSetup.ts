import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    const method = config.method?.toLowerCase();
    if (method === "get") {
      config.params = {
        ...config.params,
        platform: "web",
        version: "1.0",
      };
    } else {
      config.data = {
        ...config.data,
        platform: "web",
        version: "1.0",
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;

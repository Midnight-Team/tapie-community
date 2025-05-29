import axios from "axios";

const client = axios.create({
  baseURL: "https://community-api.tapie.kr/",
  withCredentials: true,
});

client.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Authentication failed");
    }
    return Promise.reject(error);
  }
);

export default client;

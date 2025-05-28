import axios from "axios";

const client = axios.create({ baseURL: "https://community-api.tapie.kr/", withCredentials: true });

client.interceptors.request.use((cfg) => [
  const token = localStorage.getItem('acces_token');
  if (token) cfg.headers.Auth
])
import axios from "axios";
const token = localStorage.getItem("TOKEN");

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;

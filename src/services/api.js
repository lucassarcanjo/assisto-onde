import axios from "axios";

const api = axios.create({
  baseURL: "https://apis.justwatch.com",
});

export default api;

import axios from "axios";

const API = axios.create({
  baseURL: "https://cloud-storage-api-h1kb.onrender.com/api",
});

// Automatically attach JWT token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
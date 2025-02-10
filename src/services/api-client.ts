import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to dynamically set the Authorization header
apiClient.interceptors.request.use((config) => {
  // Retrieve the token from the cookie
  const token = Cookies.get("_auth");

  // If the token exists, set the Authorization header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;

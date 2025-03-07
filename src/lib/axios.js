import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://chat-backend-red.vercel.app/api",
  withCredentials: true,
});


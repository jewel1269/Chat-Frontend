import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://chat-backend-five-theta.vercel.app/api",
  withCredentials: true,
});
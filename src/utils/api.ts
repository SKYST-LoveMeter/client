import axios from "axios";

export const Client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_HOST,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

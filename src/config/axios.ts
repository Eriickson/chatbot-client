import axios from "axios";

export const axiosService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API,
});

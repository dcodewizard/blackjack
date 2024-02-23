import axios from "axios";
import { toast } from "react-toastify";

import { ERROR_TEXT } from "@/constants";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    toast.error(ERROR_TEXT);
    return Promise.reject(error);
  }
});

export default instance;

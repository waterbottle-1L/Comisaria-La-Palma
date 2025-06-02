import axios from "axios";
import { API_URL } from "@env";

const client = axios.create({
  baseURL: API_URL,
  timeout: 5000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;

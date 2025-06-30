import axios from "axios";
import { MSVC_USER } from "@env";

const clientUser = axios.create({
  baseURL: "http://192.168.0.5:8082",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default clientUser;

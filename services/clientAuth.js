import axios from "axios";

const clientAuth = axios.create({
  baseURL: "http://192.168.0.5:8090",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default clientAuth;

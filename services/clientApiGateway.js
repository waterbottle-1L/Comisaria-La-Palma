import axios from "axios";

const clientApiGateway = axios.create({
  baseURL: "http://10.218.188.187:8080",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default clientApiGateway;

import axios from "axios";

const clientIncident = axios.create({
  baseURL: "http://192.168.0.5:9090",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default clientIncident;

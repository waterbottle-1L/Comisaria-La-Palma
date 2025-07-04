import AsyncStorage from "@react-native-async-storage/async-storage";
import clientApiGateway from "./clientApiGateway";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

const loginService = async (email, password) => {
  const response = await clientApiGateway.post("/api/auth/login", {
    email,
    password,
  });

  const { accessToken } = response.data;
  if (!accessToken) {
    throw new Error("Token no recibido");
  }

  const decoded = jwtDecode(accessToken);

  return {
    id: decoded.sub,
    role: decoded.role,
    token: accessToken,
  };
};

export default loginService;

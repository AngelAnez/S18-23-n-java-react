import axios, { isAxiosError } from "axios";
import { getCookie } from "../cookies/cookiesService";
import { OWNERS } from "../../data/db";

export const backend = axios.create({
  baseURL: "https://s18-23-n-java-react.onrender.com/api/v1",
  withCredentials: true,
});

export const authHeaders = () => {
  const userCookie = getCookie("user");
  const token = userCookie?.token || "";
  return { Authorization: `Bearer ${token}` };
};

export const authLogin = async (email: string, password: string) => {
  try {
    const response = email === "prueba@rentify.com" && password === "prueba123"
    return response && {isSuccess: true };
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
  }
};

export const authLogout = async () => {
  try {
    return {isSuccess: true };
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
  }
};

export const authRecoveryPassword = async (email: string) => {
  try {
    const response = await backend.post("/auth/recovery-password", { email });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
  }
};

export const getUserAuth = async (id: number) => {
  try {
    const response = OWNERS.find(user => user.id === id)
    return {isSuccess: true, data: response};
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};
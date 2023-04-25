import axios, { AxiosRequestConfig } from "axios";
import Constants from "expo-constants";

export const registerUser = async (data: any) => {
  const baseUrl = process.env.URL_API;

  try {
    const response = await axios.post(`${baseUrl}/user/register`, {
      email: "samu1@correo.com",
      username: "samu1",
      fullname: "samu1",
      password: "123456",
    });
    console.log("axios", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

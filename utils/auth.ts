import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "@env";

export const registerUser = async (data: any) => {
  const apiUrl = API_URL;

  try {
    const response = await axios.post(`${apiUrl}/user/register`, {
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

import axios from "axios";
import { API_URL } from "@env";

import { ILoginUser, IRegisterUser } from "../interfaces";

const apiUrl: string = API_URL;

export const registerUser = async (data: IRegisterUser) => {
  try {
    const response = await axios.post(`${apiUrl}/user/register`, {
      ...data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (data: ILoginUser) => {
  try {
    const response = await axios.post(`${apiUrl}/user/login`, {
      ...data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

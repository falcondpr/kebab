import axios from "axios";
import { API_URL } from "@env";

import { IRegisterUser } from "../interfaces";

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

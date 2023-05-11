import axios from "axios";
import { API_URL } from "@env";
import { z } from "zod";

import { ILoginUser, IRegisterUser } from "../interfaces";

const apiUrl: string = API_URL;

export const registerUser = async (
  data: z.infer<typeof IRegisterUser>
) => {
  try {
    const response = await axios.post(`${apiUrl}/user/register`, {
      ...data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (data: z.infer<typeof ILoginUser>) => {
  try {
    const response = await axios.post(`${apiUrl}/user/login`, {
      ...data,
    });
    console.log("r", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

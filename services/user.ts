import axios from "axios";
import { API_URL } from "@env";

const apiUrl: string = API_URL;

export const getUser = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/user/id/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

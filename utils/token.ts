import jwtDecode from "jwt-decode";
import { IUserStorage } from "../interfaces/user";

export const tokenToUser = async (
  token: string
): Promise<IUserStorage | string> => {
  if (!token) return "";
  const user: IUserStorage = await jwtDecode(token);
  console.log("typeof user", typeof user);
  return user;
};

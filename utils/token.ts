import jwtDecode from "jwt-decode";
import { IUserStorage } from "../interfaces/user";

export const tokenToUser = async (
  token: string
): Promise<IUserStorage | null> => {
  if (!token) return null;
  const user: IUserStorage = await jwtDecode(token);
  return user;
};

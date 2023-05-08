import jwtDecode from "jwt-decode";
import { z } from "zod";

import { IUserStorage } from "../interfaces/user";

export const tokenToUser = async (
  token: string
): Promise<z.infer<typeof IUserStorage> | string> => {
  if (!token) return "";
  const user: z.infer<typeof IUserStorage> = await jwtDecode(token);
  console.log("typeof user", typeof user);
  return user;
};

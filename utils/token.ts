import jwtDecode from "jwt-decode";

export const tokenToUser = async (token: string) => {
  if (!token) return;
  const user = await jwtDecode(token);
  return user;
};

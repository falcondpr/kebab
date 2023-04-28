import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

interface IUserProvider {
  children: React.ReactNode;
}

export const UserContext = createContext<any>(null);

export default function UserProvider({ children }: IUserProvider) {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string>("");

  const tokenToUser = async () => {
    if (!token) return;
    const user = await jwtDecode(token);
    setUser(user);
  };

  useEffect(() => {
    (async () => {
      const token = (await AsyncStorage.getItem("@auth/sura")) || "";
      setToken(token!);
      tokenToUser();
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

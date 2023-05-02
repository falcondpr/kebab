import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { tokenToUser } from "../utils";

interface IUserProvider {
  children: React.ReactNode;
}

export const UserContext = createContext<any>(null);

export function UserProvider({ children }: IUserProvider) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const token = (await AsyncStorage.getItem("@auth/sura")) || "";
      const user = tokenToUser(token);
      setUser(user);
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

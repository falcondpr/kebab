import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";

import { UserContext } from "../context/UserContext";
import { tokenToUser } from "../utils";

export function useAuth() {
  const { user, setUser } = useContext(UserContext);

  const _login = async (token: string) => {
    const user = tokenToUser(token);
    setUser(user);
    await AsyncStorage.setItem("@auth/sura", JSON.stringify(user));
  };

  const _logout = async () => {
    setUser(null);
    await AsyncStorage.setItem("@auth/sura", "");
  };

  return { user, _login, _logout };
}

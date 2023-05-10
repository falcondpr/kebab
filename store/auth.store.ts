import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

import { tokenToUser } from "../utils";

type State = {
  user: any;
};

type Actions = {
  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<State & Actions>((set) => ({
  user: null,
  login: async (token: string) => {
    await AsyncStorage.setItem(
      "@auth/sura",
      tokenToUser(token).toString()
    );
    set(() => ({ user: tokenToUser(token) }));
  },
  logout: async () => {
    await AsyncStorage.removeItem("@auth/sura");
    set(() => ({ user: null }));
  },
}));

AsyncStorage.getItem("@auth/sura").then((res) =>
  res
    ? useAuthStore.setState({ user: "" })
    : useAuthStore.setState({ user: tokenToUser(res as any) })
);

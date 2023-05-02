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
  login: (token: string) => set(() => ({ user: tokenToUser(token) })),
  logout: () => set(() => ({ user: null })),
}));

AsyncStorage.getItem("@auth/sura").then((res) =>
  useAuthStore.setState({ user: res })
);

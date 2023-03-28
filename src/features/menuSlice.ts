import { createSlice } from "@reduxjs/toolkit";

interface IMenuState { value: boolean };
const initialState: IMenuState = { value: false };

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    showMenu: (state) => {
      state.value = true
    },
    hideMenu: (state) => {
      state.value = false
    },
  }
});

export const { showMenu, hideMenu } = menuSlice.actions;
export default menuSlice.reducer;
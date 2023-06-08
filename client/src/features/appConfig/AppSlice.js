import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  sidebarOpen: true,
};

export const appConfigSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = appConfigSlice.actions;

export default appConfigSlice.reducer;

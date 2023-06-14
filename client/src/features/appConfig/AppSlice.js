import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  sidebarOpen: true,
};

export const appConfigSlice = createSlice({
  name: "app-config",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { toggleDarkMode, toggleSidebar } = appConfigSlice.actions;

export default appConfigSlice.reducer;

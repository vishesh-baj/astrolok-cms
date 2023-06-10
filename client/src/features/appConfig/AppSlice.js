import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  sidebarOpen: true,
  isMobileView: true,
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
    toggleMobileView: (state) => {
      state.isMobileView = !state.isMobileView;
    },
  },
});

export const { toggleDarkMode,toggleSidebar,toggleMobileView } = appConfigSlice.actions;

export default appConfigSlice.reducer;

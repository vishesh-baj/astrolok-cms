/** @type {import('tailwindcss').Config} */
// default theme for the tailwind
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
    daisyui: [
      {
        themes: [
          {
            appTheme: {
              primary: "#5D87FF",
              secondary: "#49BEFF",
              success: "#13DEB9",
              info: "#539BFF",
              warning: "#FFAE1F",
              danger: "##FA896B",
              light: "#F6F9FC",
              dark: "#2A3547",
            },
          },
          "dark",
          "light",
        ],
      },
    ],
  },
  plugins: [require("daisyui")],
};

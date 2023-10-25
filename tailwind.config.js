/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C51;",
        secondary: {
          100: "#0D0D2A",
          900: "#06061B",
        },
      },
    },
  },
  plugins: [],
}
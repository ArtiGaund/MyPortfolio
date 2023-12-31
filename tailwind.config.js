/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        myShadow1: '4px 0px 0 0 black',
        myShadow2: '4px 0px 0 0 black',
      },
    },
  },
  plugins: [],
}
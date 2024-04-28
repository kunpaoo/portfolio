/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "cream": "#F2D3D0",
        "blue-green":"#12a092",
        "red-one":"#DC4361",
        "dark-red":"#A71E3C",
        "light-red":"#f0c5c4",
        "blue-main":"#394c99",
        "blue-dark":"#16223C",
        "blue-darker":"#002733",
        "blue-white":"#EDF6F9"
      },
      fontSize:{
        "10xl":"12rem"
      }
    },
  },
  plugins: [],
}


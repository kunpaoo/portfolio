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
        "blue-green":"#31AFA4",
        "red-one":"#DC4361",
        "dark-red":"#A71E3C",
        "light-red":"#E68480",
        "blue-main":"#394c99",
        "blue-dark":"#16223C"
      },
      fontSize:{
        "10xl":"12rem"
      }
    },
  },
  plugins: [],
}


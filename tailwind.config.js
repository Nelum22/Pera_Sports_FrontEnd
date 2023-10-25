/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pera-yellow': '#D9A800',
        'transparent-black': 'rgba(0,0,0, 0.7)'
      },
      height:{
        '90vh' : '90vh'
      }
    },
  },
  plugins: [],
}


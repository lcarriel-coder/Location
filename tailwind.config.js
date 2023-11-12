/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'top-left': '-6px -6px 10px rgba(0, 0, 0, 0.1)',
        'top-right': '6px -6px 10px rgba(0, 0, 0, 0.1)',
      },
      margin: {
        '13': '3.25rem',
        '14': '3.70rem',
        '15': '4.25rem',
       
      },
      
    },
  },
  plugins: [],
}


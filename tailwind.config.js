/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
            'poppins' : ['poppins', 'sans-serif']
        },
        boxShadow :{
            'md': '10px 10px 4px  rgba(0, 0, 0, 8)',
            'sm' : '0 4px 40px rgba(0, 0, 0, .25)'
        },
        colors: {
            'primary': '#444444',
            'dark' : '#373636',
            'light' : '#4CBB17',
        }
    },
  },
  plugins: [],
}
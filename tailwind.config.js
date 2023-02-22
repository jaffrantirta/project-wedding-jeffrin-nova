/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Fredoka', 'sans-serif'],
        'secondary': ['Zeyada', 'cursive'],
        'third': ['Dancing Script', 'cursive'],
      },
      colors: {
        'primary': '#5A1218',
        'secondary': '#fff',
      },
      animation: {
        'spin-slowly': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [],
}

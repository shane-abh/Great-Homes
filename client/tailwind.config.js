/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#012865",
        "secondary": "#E8C06F",
        "loginBox": "#012865",
        "buttonSecondaryColor": "#E8C06F",
        "buttonSecondaryTextColor": "#102339"
      },
      fontFamily: {
        cursiveFont: ["Leckerli One", 'cursive'],
      },
      backgroundImage: {
        'profile-pattern': "url('../profile-bg.jpg')",
      }
    },
  },
  plugins: [],
}
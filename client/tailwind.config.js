/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
<<<<<<< HEAD
=======
  darkMode: "class",
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
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
<<<<<<< HEAD
      },
    },
  },
  plugins: [],
=======
        comicSans: ["Comic Neue", "cursive"]
      },
      backgroundImage: {
        'profile-pattern': "url('../profile-bg.jpg')",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
}
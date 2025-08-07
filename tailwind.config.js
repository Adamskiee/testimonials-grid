/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        "min-desktop": "1440px"
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed","sans-serif"],
      },
      colors: {
        "purple-50": "var(--purple-50)",
        "purple-300": "var(--purple-300)",
        "purple-500": "var(--purple-500)",
        "white": "var(--white)",
        "grey-100": "var(--grey-100)",
        "grey-200": "var(--grey-200)",
        "grey-400": "var(--grey-400)",
        "grey-500": "var(--grey-500)",
        "darkblue": "var(--darkblue)",
        "black": "var(--black)",
      },
      boxShadow: {
        "3xl": "var(--shadow-3xl)",
      }
    },
  },
  plugins: [],
}


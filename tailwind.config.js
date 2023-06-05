/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      // => @media (min-width: 320px) { ... }

      tablet: "696px",
      // => @media (min-width: 696px) { ... }

      laptop: "1080px",
      // => @media (min-width: 1080px) { ... }

      desktop: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    fontSize: {
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "2.5rem", //`40px`
        {
          lineHeight: "2.938rem",
        },
      ],
    },
    fontFamily: {
      raleway: ["raleway"],
      Staatliches: ["staatliches"],
    },
    extend: {
      colors: {
        "light-blue": "#549697",
        "dark-blue": "#1b1d44",
        yellow: "#ffc757",
      },
    },
  },
  plugins: [],
}

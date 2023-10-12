/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      // => @media (min-width: 320px) { ... }

      tablet: "696px",
      // => @media (min-width: 696px) { ... }

      laptop: "1080px",
      // => @media (min-width: 1080px) { ... }

      notebook: "1366px",
      // => @media (min-width: 1366px) { ... }

      desktop: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/Foto_gruppo.avif')",
        project: "url('/src/assets/robot completo.avif')",
      },
      colors: {
        "light-blue-isaac": "#549697",
        "dark-blue-isaac": "#1b1d44",
        "yellow-isaac": "#ffc757",
      },
      fontFamily: {
        Raleway: ["raleway"],
        Staatliches: ["staatliches"],
      },
      fontSize: {
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        "4xl": [
          "2.25rem", //36px`
          {
            lineHeight: "2.938rem",
          },
        ],
        "4-5xl": ["40px", "44px"],
        "5-5xl": ["55px", "60px"],
      },
    },
  },
}

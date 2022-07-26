/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '360px',
      // => @media (min-width: 360px) { ... }

      'xs': '412px',
      // => @media (min-width: 412px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      
      fontFamily: {
        space: "'Space Grotesk'",
        dm: "'DM Sans', monospace"
      },
      colors: {
        main: {
          primary: '#395B64',
          secondary: '#A5C9CA',
          light: '#CFFFFE',
          dark: '#032D3C',
        }
      }
    },
  },
  plugins: [],
}

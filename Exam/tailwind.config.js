/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    backgroundImage: {
      'hero': "url('https://media.discordapp.net/attachments/934520134750580771/1127832193885024256/Tine.png?width=527&height=671')",
    },
    screens: {
      'sm': '620px',
      // => @media (min-width: 640px) { ... }

      'md': '780px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    colors: {
      blk1: '#2A2A2A',
      white1: '#edf2f4',
      blk2: '#1E1E1E',
    },
    extend: {},
  },
  plugins: [],
}
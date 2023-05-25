/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        banger: ['Bangers'],
        marker: ['Permanent Marker'],
        sanspub: ['Public Sans'],
        bebasneue: ['Bebas Neue'],
      },
      spacing: {
        '3/4': '75%',
      },
    },
  },
  plugins: [],
}


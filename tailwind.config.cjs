/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#18181B',
        textSecondary: '#D4D4D8',
        brand: '#72383D',
        secondary: '#322D29',
        tone4: '#AC9C8D',
        tone3: '#D1C7BD',
        tone2: '#D9D9D9',
        tone1: '#F0E9E1'
      }
    }
  },
  plugins: []
}

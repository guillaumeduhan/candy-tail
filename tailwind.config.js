/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '14px',
        md: '16px',
        base: '18px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '60px',
      },
			colors: {
				primary: colors.sky
			}
		},
  },
  plugins: [],
}

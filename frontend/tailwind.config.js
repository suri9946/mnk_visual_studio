/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E91E8C',
          light: '#F8F4FF',
        },
        secondary: '#7B2FF7',
        dark: '#1A1A2E',
        lightGray: '#F5F5FA',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-pink-purple': 'linear-gradient(135deg, #7B2FF7 0%, #E91E8C 100%)',
      },
      boxShadow: {
        'premium': '0 20px 40px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js

  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'blue-sky': '#E6ECF5',
        red: '#EF3061',
        'blue-dark': '#07469C',
        dark: '#333333',
        'blue-light': '#0099E1',
        'gray-light': '#757575',
        'white-dark': '#F2F2F2',
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      fontFamily: {
        nunito: ['Nunito'],
        mulish: ['Mulish'],
      },
    },
    plugins: [],
  },
};

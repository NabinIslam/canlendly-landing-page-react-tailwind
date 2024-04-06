/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      'primary-color': '#006BFE',
      'primary-hover-color': '#006afecd',
      'primary-text-color': '#0D3557',
      'white': '#ffffff',
    },
  },
  plugins: [],
};

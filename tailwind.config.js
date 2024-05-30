module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Manrope", sans-serif',
      ],
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'light-orange': '#FF723A',
        'dark-orange': '#e75115',
        'gray': '#505050',
        'blue': '#2878EB',
        'main-color':'#1B212F',
      },
    },
  },
  plugins: [],
};

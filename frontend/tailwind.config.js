/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tpGreen: {
          500: '#1b8e4a',
          600: '#15753b',
        },
        tpDark: '#222222',
        tpLight: '#f8f9fa',
        tpGray: '#555555',
      },
    },
  },
  plugins: [],
};

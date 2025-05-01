/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,html}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

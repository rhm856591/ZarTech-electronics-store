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
        primary: "#354c9b",
        secondary: "#5b6fae",
        tertiary: "#8292c1",
        neutral: "#a9b6d4",
        light: "#e8ebf2",
      },
    },
  },
  plugins: [],
};

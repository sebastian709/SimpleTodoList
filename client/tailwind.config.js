/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This covers all JS and JSX files in the src directory
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px", // Custom xs breakpoint
      },
    },
  },
  plugins: [],
};

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
      height: {
        15: "3.75rem", // 60px (1rem = 4px by default)
        20: "5rem", // 80px
      },
    },
  },
  plugins: [],
};

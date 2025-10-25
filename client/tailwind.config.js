/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Map the default `gray` palette to Tailwind's `sky` palette so existing
      // `text-gray-...`, `bg-gray-...`, `border-gray-...` classes render as sky-blue.
      colors: {
        gray: colors.sky,

        // Project custom tokens: change their values to sky shades so usages of
        // `text-primary-gray`, `bg-secondary-gray`, etc. become sky-blue without
        // renaming classes across the codebase.
        "primary-blue": "#20aee3",
        "secondary-blue": "#cfecfe",
        "primary-purple": "#6772e5",
        "secondary-purple": "#f1effd",
        "primary-red": "#ff5c6c",
        "secondary-red": "#f5c0c7",
        "lighter-red": "#fbe3e6",
        "primary-gray": colors.sky[500],
        "secondary-gray": colors.sky[100],
        "lighter-gray": colors.sky[50],

        // Theme colors
        "theme-purple": "#2D0051", // Dark purple for backgrounds
        "theme-light-purple": "#3A006B", // Slightly lighter purple for accents
        "theme-gold": "#FFD700", // Light gold for text
        "theme-light-gold": "#FFDF4F", // Lighter gold for hover states

        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        success: "#28a745",
      },
      fontFamily: {
        primary: "'Montserrat', sans-serif",
      },
      boxShadow: {
        box: "0px 0px 4px 0px #a5a5a5",
      },
    },
  },
  plugins: [],
};

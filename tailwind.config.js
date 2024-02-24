/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // 'node_modules/flowbite-react/lib/esm/**/*.js',
    // "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 1s ease-in-out',
      },
      keyframes: {
        slide: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    // require('flowbite/plugin'),
  ],
};

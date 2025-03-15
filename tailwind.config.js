/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust this path to match your project structure
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ['var(--font-catamaran)', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        dancingScript: ['var(--font-dancing-script)', 'cursive'],
        doto: ['var(--font-doto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

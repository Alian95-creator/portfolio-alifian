/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom easing untuk hover icon smooth
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      colors: {
        // tambahan warna opsional jika mau nanti
      },
      spacing: {
        // tambahan spacing opsional jika perlu
      },
    },
  },
  plugins: [],
};
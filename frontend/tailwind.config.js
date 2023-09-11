/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',      // Include Vue components
    './public/index.html'  // Include your HTML template
  ],
  theme: {
    extend: {
      ringColor: {
        'primary-100': '#8ECDDD',
        'primary-300': '#22668D',
      },
    },
  },
  plugins: [],
}


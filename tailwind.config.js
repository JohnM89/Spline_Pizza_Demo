/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {

        '1/3': '33.333333%',
        '1/2': '50%',
         '2/3': '66.666667%',
         '3/4': '75%',
          '4/5': '80%',},
    },
    keyframes: {
        drawHorizontalLine: {
          'to': { width: '100%' }
        },
        drawVerticalLine: {
          'to': { height: '100px' } // Adjust as needed
        },
      },
      animation: {
        drawHorizontal: 'drawHorizontalLine 2s forwards',
        drawVertical: 'drawVerticalLine 2s 1s forwards',
      },
  },
  plugins: [
    typography()
  ],
}


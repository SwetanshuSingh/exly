/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily : ["Sora", "Montserrat", "sans-serif", "Helvetica"]
    },
    boxShadow : {
      'custom-orange' : '0px 4px 25px 0px rgba(255, 137.00000000000003, 68.99999999999999, 0.57)',
      'offer' : '0px 0px 25px 0px rgba(0, 0, 0, 0.2)',
      'hr' : '0px 0px 50px 0px rgba(0, 0, 0, 0.2)',
      'svg-box' : '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
      'button-orange' : '0px 0px 40px 0px rgba(255, 106.99999999999996, 0, 0.64)',
      'marketing-box' : '0px 0px 20px 0px rgba(0, 0, 0, 0.1)',
      'special-price' : '0px 0px 25px 0px rgba(0, 0, 0, 0.15)',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
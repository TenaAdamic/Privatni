/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "medium-purple": "#af87ef",
      },
    },
  },
  plugins: [
     
    require('@tailwindcss/forms'), ('@tailwindcss/transition'), 
    // ...
    
  ],
}


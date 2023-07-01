/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      colors:
      {
        neon:
        {
          primary:"blue",
          DEFAULT:"white",
          dark:"#0909FF"
        }
      },

      screens:{
        widescreen:{'raw':'(min-aspect-ratio:3/2)'},
        tallscreen:{'raw':'(max-aspect-ratio:13/20)'},
      },
      keyframes:{
        'open-menu':
        {
          "0%": {transform: 'scaleY(0)'},
          "70%": {transform: 'scaleY(1.2)'},
          "100%": {transform: 'scaleY(1)'},
        }
      },
        animation:
        {
          'open-menu' : 'open-menu 1s ease-in-out forwards'
        }
      
    },
  },
  plugins: [],
}


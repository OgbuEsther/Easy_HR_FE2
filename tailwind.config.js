/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'herotext': '#00214f',
      'black': '#000',
      'heroparagraph': '#232333',
      'herobutton': '#3CD19C',
      'header': '#001328',
      'hover': '#dc3545',
      'buttoncol': '#001328',
      'buttonhover': '#007bff',
      'h3text': '#0057B3',
    },
    screens: {
      'xl': { 'max': '1280px' },
      'xsm': {'max': '320px'},
      'sm': {'max': '375px'},
      'xmd': {'max': '500px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'}
    },
    extend: {
      height: {
        'custom': '33.125rem'
      },
      backgroundImage: {
        'hero': "url('../src/Assets/banner1.jpg')",
        'righthero': "url('../src/Assets/banner2.jpg')",
        'lefthero': "url('../src/Assets/banner3.jpg')"
      },

      animation: {
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        }
      }
    },
  },
  plugins: [],
}


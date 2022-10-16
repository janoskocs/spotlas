/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js}',
    './src/components/*.{html,js}',
    './src/*.{html,js}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Graphik']
    },
    screens: {
      sm: '320px',
      md: '375px',
      l: '428px'

    },
    extend: {
      color: {
        spotlasPink: 'rgb(255, 0, 96)',
        brightGreen: 'rgb(48, 216, 72)',
        mainPink1: '#ff0080',
        mainPink2: '#ff0040',
        titleSubtext: '#c8c8c8',
        border: '#e0e0e0',
        footerText: '#c8c8c8'
      },
    }
  },
  plugins: [],
}

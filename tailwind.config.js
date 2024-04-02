/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      body: ['system-ui', 'sans-serif']
    },
    screens: {
      'small-mobile': { max: '280px' },
      'large-mobile': { min: '281px', max: '425px' },
      'big-mobile': { min: '426px', max: '600px' },
      'top-mobile': { min: '601px', max: '768px' },
      'bigger-devices': '769px',
      tablet: { min: '769px', max: '1024px' },
      desktop: { min: '1025px', max: '1280px' }
    },
    extend: {
      animation: {
        'custom-fade-in': 'fade_in .5s linear',
        'custom-fade-out': 'fade_out .25s linear'
      },
      keyframes: {
        fade_in: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        fade_out: {
          '100%': { opacity: '1' },
          '0%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
}

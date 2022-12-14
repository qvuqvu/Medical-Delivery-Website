module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      h1: '36px',
      h2: '32px',
      h3: '24px',
      h4: '20px',
      h5: '16px',
      h6: '14px'
    },
    screens: {
      mobile: '320px',
      tablet: '768px',
      laptop: '1024px'
    },
    fontFamily: {
      clash: ['Clash Display', 'sans-serif'],
      satoshi: ['Satoshi', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#88CFF9',
        dark_primary: '#43B6FB',
        secondary: '#43B6FB',
        dark_secondary: '#1b1b1b',
        light_grey: '#f9f9f9',
        border_grey: '#CFEDFF',
        border_dark: '#CFEDFF'
      },
      spacing: {
        1: '1px'
      },
      keyframes: {
        growth: {
          from: {
            transform: 'scale(0.7)'
          },
          to: {
            transform: 'scale(1)'
          }
        },
        fadeIn: {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        fadeOut: {
          from: {
            opacity: '1'
          },
          to: {
            opacity: '0'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}

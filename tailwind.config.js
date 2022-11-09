module.exports = {
  content: [
    './src/**/*.{html,pug,js}'
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif'],
      icon: ['icomoon']
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        black :{
          DEFAULT: '#000000',
          '100' : '#282928',
        },
        gray: {
          DEFAULT : '#EBEBEB',
          '100' : '#C3C1BB',
          '200' : '#F2F2F2',
          '300' : '#776F8F',
          '400' : '#D8DAE1',
          '500' : '#C9CBD2'
        },
        green: {
          DEFAULT: '#00FF00',
          '100' : '#24BA60',
          '200' : '#66C86C',
          '300' : '#82C576'
        },
        red: {
          DEFAULT : '#FF0000',
          '100' : '#DF3434',
        },
        blue: {
          DEFAULT: '#3E17BC',
          '100' : '#150446',
          '200' : '#4600C4',
        },
        purple: {
          '100' : '#82C576'
        },
        custom: {
          '100': '#A09C8E',
          '200': '#F1F3F9',
          '300' : '#1E1E1E',
          '400' : '#CAC8C1',
        },
      },
      backgroundImage: {
        'slider': "url('./src/assets/img/slider-bg.png')",
        'logo': "url('./src/assets/img/logo.svg')",
        'heroBackgorund': "url('./src/assets/img/create-project-bg.png')",
      },
      keyframes:{
        spinNew: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(180deg)'}
        }
      },
      animation: {
        'spin-new': 'spinNew 30s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

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
        },
      },
      backgroundImage: {
        'slider': "url('./src/assets/img/slider-bg.png')",
        'logo': "url('./src/assets/img/logo.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
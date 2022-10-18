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
          '100' : '#24BA60'
        },
        red: {
          DEFAULT : '#FF0000',
          '100' : '#DF3434',
        },
        blue: {
          DEFAULT: '#3E17BC',
          '100' : '#150446',
        },
        custom: {
          '100': '#A09C8E',
          '200': '#F1F3F9',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
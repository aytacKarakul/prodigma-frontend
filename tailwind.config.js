module.exports = {
  content: ["./src/**/*.{html,pug,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      heading: ["Montserrat", "sans-serif"],
      icon: ["icomoon"],
    },
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          100: "#282928",
          200: "#696B71",
        },
        gray: {
          DEFAULT: "#EBEBEB",
          100: "#C3C1BB",
          200: "#F2F2F2",
          300: "#776F8F",
          400: "#EAEAEA",
          500: "#F6F6F6",
        },
        green: {
          DEFAULT: "#00FF00",
          100: "#24BA60",
          200: "#66C86C",
          300: "#82C576",
        },
        red: {
          DEFAULT: "#FF0000",
          100: "#DF3434",
          200: "#E72F2F",
        },
        blue: {
          DEFAULT: "#3E17BC",
          100: "#150446",
          200: "#4600C4",
        },
        purple: {
          100: "#82C576",
        },
        custom: {
          100: "#A09C8E",
          200: "#F1F3F9",
          300: "#1E1E1E",
          400: "#CAC8C1",
          500: "#DF9B34",
          600: "#FFA600",
          700: "#D8D8D8",
          800: "#DADADA",
        },
      },
      backgroundImage: {
        slider: "url('./src/assets/img/slider-bg.png')",
        logo: "url('./src/assets/img/logo.svg')",
        heroBackgorund: "url('./src/assets/img/create-project-bg.png')",
        benefitsBrandCover: "url('./src/assets/img/benefits-brands-cover.png')",
      },
      keyframes: {
        spinNew: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        "spin-new": "spinNew 30s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

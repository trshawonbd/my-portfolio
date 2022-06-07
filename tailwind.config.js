module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      animation:{
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },

      keyframes : {
        'shake':{
        '10%, 90%' :{
          transform: 'translate3d(-1px, 0, 0)'
        },
        
        '20%, 80%' :{
          transform: 'translate3d(2px, 0, 0)'
        },
      
        '30%, 50%, 70%' : {
          transform: 'translate3d(-4px, 0, 0)'
        },
      
        '40%, 60%': {
          transform: 'translate3d(4px, 0, 0)'
        }
      }
    }
    },
  },
  daisyui: {
    themes: [
      {
        light: {

          primary: "#f5c32c",

          secondary: "#fca61f",

          accent: "#918686",

          neutral: "#281F33",

          "base-100": "#ffffff",

          info: "#7CB0D5",

          success: "#3DD194",

          warning: "#BC900B",

          error: "#DF3A60",
        },
      },
      {
        dark: {


          primary: "#251D58",

          secondary: "#828DF8",

          accent: "#F471B5",

          neutral: "#1D283A",

          "base-100": "#0F1729",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },


    ],
  },
  plugins: [require("daisyui")],
}

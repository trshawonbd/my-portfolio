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



          primary: "#f5c32c",

          secondary: "#f9708e",

        

          neutral: "#221B23",

          "base-100": "#132938",

          info: "#3791F1",

          success: "#12A18B",
          warning: "#9D7C10",
          error: "#FD5E64",
        },
      },


    ],
  },
  plugins: [require("daisyui")],
}

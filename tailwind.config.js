/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    extend: {
      animation:{
        'spin-slow': 'spin 2s linear infinite',
      },
      fontFamily: {
        'header-light': ['HkGroteskLight', 'sans-serif'],
        'header-medium': ['HkGroteskMedium', 'sans-serif'],
        'header-regular': ['HkGroteskRegular', 'sans-serif'],
        'header-regular-legacy': ['HkGroteskRegularLegacy', 'sans-serif'],
        'para': ['Poppins', 'sans-serif'],
        
      },
      backgroundImage: {
        'sale-gradient': "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
      },

      colors: {
        //Light Theme


        'light-side-bar-color': '#405189',
        'light-gray-bg': '#f3f3f9',
        'light-white-bg': '#ffffff',
        'light-body-text-color': '#212529',
        'light-side-bar-text-color': '#abb9e8',
        'light-side-bar-menu-color': '#838fb9',
        

        'light-card-heading-text-color': '#878a99',
        'light-btn-color': '#878a99',

        'light-header-color' : '#495057',
        'light-para-color' : '#878a99',

        'blue-btn-bg': 'rgba(41, 156, 219, 0.1)',
        'green-btn-bg': 'rgba(10, 179, 156, 0.1)',
        'orange-btn-bg': 'rgba(241, 150, 59, 0.1)',
        'gray-btn-bg': 'rgba(255, 255, 255, 0.15)',

        

        




        





        //Dark Theme

        "dark-side-bar-color": "#212529",
        "dark-nav-bar-color": "#292832",

        "dark-header-color": "#ced4da",
        "dark-para-color": "#878a99",
        "dark-bg-color": "#292e32",






        light: "#f3f6f9",
        dark: "#212529",
        blue: "#3577f1",
        purple: "#6559cc",
        pink: "#f672a7",
        red: "#f06548",
        orange: "#f1963b",
        yellow: "#f7b84b",
        green: "#0ab39c",
        teal: "#02a8b5",
        cyan: "#299cdb",
        white: "#fff",
        gray: "#878a99",
        "gray-dark": "#343a40",
        "gray-100": "#f3f6f9",
        "gray-200": "#eff2f7",
        "gray-300": "#e9ebec",
        "gray-400": "#ced4da",
        "gray-500": "#adb5bd",
        "gray-600": "#878a99",
        "gray-700": "#495057",
        "gray-800": "#343a40",
        "gray-900": "#212529",
        primary: "#405189",
        secondary: "#3577f1",
        success: "#0ab39c",
        info: "#299cdb",
        warning: "#f7b84b",
        danger: "#f06548",
        bgsuccess: "#0ab39c2e",
        bgprimary : "#4051892e",
        bgsecondary : "#3577f12e",
        bginfo : "#299cdb2e",
        bgdanger : "#f065482e",
        bggreen : "#0ab39c1a",
        bgyellow : "#f7b84b1a",
      },
      backgroundImage: {
        // 'black': 'linear-gradient(rgba(15, 14, 23, 0.5), rgba(15, 14, 23, 0.5))',


      //   'background': ' linear-gradient(3deg, rgb(237,242,244),rgb(247,237,226));'

      // }


        // 'background': ' linear-gradient(3deg, rgb(237,242,244),rgb(247,237,226))',
        'sideGradient': 'linear-gradient(to right,#405189,#0ab39c)'
        
      }

    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }


      'slg': '990px',
      'lg': '1024px',

      // => @media (min-width: 1024px) { ... }
      'sxl': '1200px',
      // => @media (min-width: 1280px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1537px",
      // => @media (min-width: 1537px) { ... }
    },
  },
  plugins: [
    require("daisyui")],

  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: false, // include daisyUI colors and design decisions for all components
    utils: false, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },

};

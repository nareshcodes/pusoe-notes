/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
    'kprimary': '#F5EFFF',
 'ksecondary': '#E5D9F2',
 'pbgcolor': '#CDC1FF',
 'sbgcolor': '#A294F9',
 'footer': '#101828',
 'menucolor':'#A294F9',
 'h1color': '#A294F9',
 'btnprimary':'#A294F9',
  },
  fontSize:{
    'menu':'18px',
  },
   fontFamily: {
      menu: ["PT Sans Caption", 'sans-serif']
    },
    },
  },
  plugins: [],
 
 
}


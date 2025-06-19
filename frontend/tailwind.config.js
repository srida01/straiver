   const {
     default: flattenColorPalette,
   } = require("tailwindcss/lib/util/flattenColorPalette");

   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./index.html",
    "./components.json",
       "./src/**/*.{js,jsx}",
     ],
     safelist: [
  "bg-gradient-to-r",
  "from-blue-500",
  "to-pink-500",
  "blur-xl",
  "animate-aurora",
  "after:content-['']",
  "after:bg-gradient-to-r",
],
     darkMode: "class",
     theme: {
       extend: {
         animation: {
           aurora: "aurora 60s linear infinite",
         },
         keyframes: {
           aurora: {
             from: {
               backgroundPosition: "50% 50%, 50% 50%",
             },
             to: {
               backgroundPosition: "350% 50%, 350% 50%",
             },
           },
         },
       },
     },
     plugins: [],
   };



// /** @type {import('tailwindcss').Config} */
// const { flattenColorPalette } = require('tailwindcss/lib/utilities/flattenColorPalette');
// const svgToDataUri = require("mini-svg-data-uri");

// // Plugin to add each Tailwind color as a global CSS variable
// function addVariablesForColors({ addBase, theme }) {
//   const colors = theme('colors'); // Directly fetch colors from theme
//   const colorVariables = {};

//   // Flatten the color palette manually
//   for (const [key, value] of Object.entries(colors)) {
//     if (typeof value === 'string') {
//       colorVariables[`--${key}`] = value; // Simple color
//     } else if (typeof value === 'object' && value !== null) {
//       for (const [shade, shadeValue] of Object.entries(value)) {
//         colorVariables[`--${key}-${shade}`] = shadeValue; // Nested shades
//       }
//     }
//   }

//   addBase({
//     ':root': colorVariables,
//   });
// }
// //add Svg from hitesh bhai
// function addSvgPatterns ({ matchUtilities, theme }) {
//   matchUtilities(
//     {
//       'bg-grid': (value) => ({
//         backgroundImage: `url("${svgToDataUri(
//           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//         )}")`,
//       }),
//       'bg-grid-small': (value) => ({
//         backgroundImage: `url("${svgToDataUri(
//           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//         )}")`,
//       }),
//       'bg-dot': (value) => ({
//         backgroundImage: `url("${svgToDataUri(
//           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
//         )}")`,
//       }),
//     },
//     { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
//   );
// }

// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
  
//   darkMode: 'class',
//   theme: {
//     extend: {
//       animation: {
//         spotlight: "spotlight 2s ease .75s 1 forwards",
//         scroll:"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//       keyframes: {
//         spotlight: {
//           "0%": {
//             opacity: 0,
//             transform: "translate(-72%, -62%) scale(0.5)",
//           },
//           "100%": {
//             opacity: 1,
//             transform: "translate(-50%,-40%) scale(2)",
//           },
          
//         },
//         scroll: {
//           to: {
//             transform: "translate(calc(-50% - 0.5rem))",
//           },
//         },
//       },
//     },
//   },



//   plugins: [addVariablesForColors,addSvgPatterns],
// };


/** @type {import('tailwindcss').Config} */
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");

// Plugin to add each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }) {
  const colors = theme('colors'); // Directly fetch colors from theme
  const colorVariables = {};

  // Manually flatten the color palette
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      colorVariables[`--${key}`] = value; // Simple color
    } else if (typeof value === 'object' && value !== null) {
      for (const [shade, shadeValue] of Object.entries(value)) {
        colorVariables[`--${key}-${shade}`] = shadeValue; // Nested shades
      }
    }
  }

  addBase({
    ':root': colorVariables,
  });
}

// Add SVG background patterns
function addSvgPatterns({ matchUtilities, theme }) {
  matchUtilities(
    {
      'bg-grid': (value) => ({
  backgroundImage: `url("${svgToDataUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value || '#000'}"><path d="M0 .5H31.5V32"/></svg>`
  )}")`,
}),
      'bg-grid-small': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      'bg-dot': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: theme('colors').background, type: 'color' }
  );
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        background: "white", // Ya koi valid color code
        foreground: "black", // Ya koi valid color code
      
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(2)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },

  plugins: [addVariablesForColors, addSvgPatterns],
};

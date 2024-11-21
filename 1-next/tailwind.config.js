/** @type {import('tailwindcss').Config} */
// Plugin to add each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }) {
  const colors = theme('colors'); // Directly fetch colors from theme
  const colorVariables = {};

  // Flatten the color palette manually
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
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
      },
    },
  },
  plugins: [addVariablesForColors],
};

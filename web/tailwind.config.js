/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color
      colors: {
        'brand-primary': {
          '50': '#f2fbf9',
          '100': '#d1f6ee',
          '200': '#9eeadb',
          '300': '#6edac9',
          '400': '#40c1b1',
          '500': '#27a597',
          '600': '#1d847b',
          '700': '#1b6a64',
          '800': '#1a5551',
          '900': '#1a4744',
          '950': '#092a29',
        }
      }
    },
  },
  plugins: [],
}


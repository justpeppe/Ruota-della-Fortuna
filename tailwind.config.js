/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#020b2d',
        'neon-cyan': '#00e5ff',
        'neon-violet': '#7c4dff',
      },
    },
  },
  plugins: [],
}

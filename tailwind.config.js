/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#07070b', panel: '#0f0f16', line: '#22222e', violet: '#8b5cf6', volt: '#3b82f6' },
      fontFamily: { display: ['"Space Grotesk"', 'sans-serif'], sans: ['Manrope', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}

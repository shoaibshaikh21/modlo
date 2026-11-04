/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B090A',
          secondary: '#151011',
          card: '#120E10',
          wine: '#241015',
        },
        burgundy: {
          DEFAULT: '#481823',
          dark: '#241015',
          light: '#652332',
          border: 'rgba(72, 24, 35, 0.45)',
          glow: 'rgba(142, 41, 72, 0.25)',
        },
        crimson: {
          DEFAULT: '#8E2948',
          accent: '#A83256',
          bright: '#BA3760',
        },
        cream: {
          DEFAULT: '#F1E7DC',
          muted: '#D8CEBF',
          paper: '#EBE0D3',
        },
        text: {
          primary: '#F1E7DC',
          muted: '#A99D9B',
          dim: '#6D6260',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        body: ['Inter', 'Manrope', 'sans-serif'],
        serif: ['"Playfair Display"', '"Instrument Serif"', 'Georgia', 'serif'],
        editorial: ['"Instrument Serif"', '"Playfair Display"', 'serif'],
        handwriting: ['"Reenie Beanie"', '"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      boxShadow: {
        'wine-glow': '0 0 50px -10px rgba(72, 24, 35, 0.6)',
        'crimson-soft': '0 10px 40px -15px rgba(142, 41, 72, 0.4)',
      }
    },
  },
  plugins: [],
}

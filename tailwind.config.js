/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: '#050505',
        surface: '#0A0A0A',
        surfaceLight: '#111111',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          dark: '#AA8C2C',
        },
        text: {
          DEFAULT: '#FAFAFA',
          muted: '#A1A1AA',
        }
      },
      fontFamily: {
        sans: ['"Microsoft YaHei"', 'sans-serif'],
        display: ['"Microsoft YaHei"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
        'luxury-gradient': 'linear-gradient(to bottom right, #050505, #111111, #0a0a0a)',
      }
    },
  },
  plugins: [],
};

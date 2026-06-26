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
        background: '#09111F',
        surface: '#0F1A2B',
        surfaceLight: '#172338',
        gold: {
          DEFAULT: '#E0B15B',
          light: '#F7DFA6',
          dark: '#A8742B',
        },
        cyan: '#5DD3D6',
        ink: '#07101C',
        text: {
          DEFAULT: '#F6F8FB',
          muted: '#A9B6C8',
        }
      },
      fontFamily: {
        sans: ['"Microsoft YaHei"', 'sans-serif'],
        display: ['"Microsoft YaHei"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 18% 12%, rgba(224, 177, 91, 0.18) 0%, transparent 32%), radial-gradient(circle at 82% 0%, rgba(93, 211, 214, 0.12) 0%, transparent 28%)',
        'luxury-gradient': 'linear-gradient(135deg, #07101C 0%, #0B1626 44%, #111A2A 100%)',
      }
    },
  },
  plugins: [],
};

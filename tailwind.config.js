/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#B9EFFF',
        'bright-cyan': '#35BDEB',
        'deep-blue': '#0879CF',
        'vibrant-orange': '#FF4B0B',
        'dark-text': '#151B24',
        canvas: {
          bg: '#EAF5FA',
          surface: '#FFFFFF',
        },
      },
      fontFamily: {
        title: ['"Adobe Caslon Pro"', '"Adobe Caslon"', '"Libre Caslon Text"', 'Caslon', 'Georgia', 'serif'],
        paragraph: ['Avenir', '"Avenir Light"', '"Avenir Next"', '"Nunito Sans"', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Adobe Caslon Pro"', '"Adobe Caslon"', '"Libre Caslon Text"', 'Caslon', 'Georgia', 'serif'],
        hero: ['"Adobe Caslon Pro"', '"Adobe Caslon"', '"Libre Caslon Text"', 'Caslon', 'Georgia', 'serif'],
        sans: ['Avenir', '"Avenir Light"', '"Avenir Next"', '"Nunito Sans"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

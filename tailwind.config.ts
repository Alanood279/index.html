import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-tajawal)', 'Tajawal', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#f97316',
          dark: '#ea580c',
        },
        secondary: {
          DEFAULT: '#1e3a5f',
        },
        surface: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
      },
    },
  },
  plugins: [],
}

export default config

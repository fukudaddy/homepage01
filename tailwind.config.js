/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 木材をイメージした温かみのあるカラーパレット
        wood: {
          50: '#fefdfb',
          100: '#fdf9f2',
          200: '#f9efe0',
          300: '#f3e0c4',
          400: '#eac997',
          500: '#deb887', // メインの木材カラー
          600: '#c19a5a',
          700: '#a67c3a',
          800: '#8b6332',
          900: '#72512f',
        },
        hinoki: {
          50: '#fffef7',
          100: '#fffaeb',
          200: '#fff2c7',
          300: '#ffe89f',
          400: '#ffdb6b',
          500: '#f5c85c', // ヒノキカラー
          600: '#e6b347',
          700: '#d4953d',
          800: '#b87832',
          900: '#9a632a',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#adb8ad',
          400: '#849084',
          500: '#6b7a6b',
          600: '#556555',
          700: '#475247',
          800: '#3c453c',
          900: '#343a34',
        }
      },
      fontFamily: {
        'noto': ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
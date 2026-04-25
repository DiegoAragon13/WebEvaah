/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          primary: '#00C8D7',
          dark: '#00A8B5',
          bright: '#00E5F5',
          subtle: {
            light: '#E4F9FA',
            dark: '#003F44',
          },
        },
        bg: {
          primary: { light: '#F4F6F8', dark: '#0D1117' },
          surface: { light: '#FFFFFF', dark: '#161B22' },
          secondary: { light: '#EEF1F5', dark: '#1F2937' },
        },
        border: { light: '#E0E4EA', dark: '#2A3340' },
        text: {
          primary: { light: '#1C2028', dark: '#E8EDF2' },
          secondary: { light: '#8A95A3', dark: '#6B7685' },
        },
        status: {
          success: '#3EBF7A',
          warning: '#F5A623',
          danger: '#D0021B',
        },
      },
      animation: {
        'pop': 'pop 0.3s cubic-bezier(0.68,-0.55,0.27,1.55)',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

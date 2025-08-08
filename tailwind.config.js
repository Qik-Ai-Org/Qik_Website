/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        qik: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          'purple-light': '#A78BFA',
          'purple-dark': '#7C3AED',
          'blue-light': '#60A5FA',
          'blue-dark': '#2563EB',
        },
        surface: {
          DEFAULT: '#FAFCFF',
          elevated: '#F8FAFC',
          dimmed: '#F1F5F9',
        },
        text: {
          primary: '#1E293B',
          secondary: '#475569',
          accent: '#8B5CF6',
        }
      },
      backgroundImage: {
        'gradient-qik': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
      },
    },
  },
  plugins: [],
}
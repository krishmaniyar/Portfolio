/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0f0f23',
        'bg-secondary': '#1a1a2e',
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.75)',
        'accent-primary': '#64ffda',
        'accent-secondary': '#ff6b6b',
        'glass-bg': 'rgba(255, 255, 255, 0.08)',
        'glass-border': 'rgba(255, 255, 255, 0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #64ffda 0%, #a78bfa 25%, #f472b6 50%, #fb7185 75%, #fbbf24 100%)',
        'blob-1': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'blob-2': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'blob-3': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'blob-4': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'blob-5': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'blob-6': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float-blob': 'float-blob 20s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 1s ease both',
        'pulse-glow': 'pulse-glow 2s infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'float-blob': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fadeInUp': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 4px 20px rgba(34, 197, 94, 0.1)' },
          '50%': { opacity: '0.8', boxShadow: '0 4px 30px rgba(34, 197, 94, 0.25)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

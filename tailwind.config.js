/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fcfcfd',
          100: '#f8f8fc',
          200: '#f1f1f8',
          300: '#e2e2f0',
        },
        purple: {
          light: '#c4b5fd',
          DEFAULT: '#8b5cf6',
          dark: '#6d28d9',
          deep: '#4c1d95',
          glow: 'rgba(139, 92, 246, 0.4)'
        },
        lime: {
          DEFAULT: '#ccff00',
          soft: '#a3e635',
          hover: '#b8e600',
          light: '#e6ff66',
          dim: 'rgba(204, 255, 0, 0.15)'
        },
        cyanAccent: {
          light: '#7dd3fc',
          DEFAULT: '#06b6d4',
          glow: 'rgba(6, 182, 212, 0.4)'
        },
        pinkAccent: '#f472b6',
        graphite: {
          50: '#2a2a35',
          100: '#1f1f2b',
          DEFAULT: '#0f0f15',
          card: '#161622',
          dark: '#0a0a0f'
        }
      },
      fontFamily: {
        serif: ['Syne', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
      },
      backgroundImage: {
        'holo-wave': 'linear-gradient(135deg, rgba(196,181,253,0.8) 0%, rgba(125,211,252,0.8) 40%, rgba(204,255,0,0.7) 70%, rgba(244,114,182,0.8) 100%)',
        'purple-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        'cyan-purple-gradient': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'holo-shift': 'holoShift 10s ease infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(139, 92, 246, 0.8)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        holoShift: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(60deg)' }
        }
      }
    },
  },
  plugins: [],
}

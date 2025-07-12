/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 4s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-in-right': 'slideInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-in-up': 'slideInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scale-in': 'scaleIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'fade-in-rotate': 'fadeInRotate 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'bounce-in': 'bounceIn 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'slide-in-top': 'slideInFromTop 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'zoom-in-rotate': 'zoomInRotate 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'wiggle': 'wiggle 1.5s ease-in-out',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'magnetic': 'magneticHover 4s ease-in-out infinite',
        'liquid': 'liquidMove 8s ease-in-out infinite',
        'text-reveal': 'textReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'particle-float': 'particleFloat 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg) scale(1.05)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-150px) rotateY(-45deg) scale(0.8)', filter: 'blur(10px)' },
          to: { opacity: '1', transform: 'translateX(0) rotateY(0deg) scale(1)', filter: 'blur(0px)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(150px) rotateY(45deg) scale(0.8)', filter: 'blur(10px)' },
          to: { opacity: '1', transform: 'translateX(0) rotateY(0deg) scale(1)', filter: 'blur(0px)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(150px) scale(0.7) rotateX(-30deg)', filter: 'blur(10px)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1) rotateX(0deg)', filter: 'blur(0px)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.3) rotate(-20deg)', filter: 'blur(10px)' },
          to: { opacity: '1', transform: 'scale(1) rotate(0deg)', filter: 'blur(0px)' },
        },
        fadeInRotate: {
          from: { opacity: '0', transform: 'rotate(-45deg) scale(0.5)', filter: 'blur(10px)' },
          to: { opacity: '1', transform: 'rotate(0deg) scale(1)', filter: 'blur(0px)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.2) rotate(-360deg)', filter: 'blur(10px)' },
          '50%': { opacity: '1', transform: 'scale(1.1) rotate(-180deg)', filter: 'blur(2px)' },
          '70%': { transform: 'scale(0.95) rotate(-90deg)', filter: 'blur(1px)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)', filter: 'blur(0px)' },
        },
        slideInFromTop: {
          from: { opacity: '0', transform: 'translateY(-150px) rotateX(-120deg) scale(0.8)', filter: 'blur(10px)' },
          to: { opacity: '1', transform: 'translateY(0) rotateX(0deg) scale(1)', filter: 'blur(0px)' },
        },
        zoomInRotate: {
          from: { opacity: '0', transform: 'scale(0) rotate(360deg)', filter: 'blur(10px)' },
          to: { opacity: '1', transform: 'scale(1) rotate(0deg)', filter: 'blur(0px)' },
        },
        wiggle: {
          '0%, 7%': { transform: 'rotateZ(0) scale(1)' },
          '15%': { transform: 'rotateZ(-20deg) scale(1.1)' },
          '20%': { transform: 'rotateZ(15deg) scale(1.05)' },
          '25%': { transform: 'rotateZ(-15deg) scale(1.1)' },
          '30%': { transform: 'rotateZ(10deg) scale(1.05)' },
          '35%': { transform: 'rotateZ(-8deg) scale(1.02)' },
          '40%, 100%': { transform: 'rotateZ(0) scale(1)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '14%': { transform: 'scale(1.4)', filter: 'brightness(1.2)' },
          '28%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '42%': { transform: 'scale(1.4)', filter: 'brightness(1.2)' },
          '70%': { transform: 'scale(1)', filter: 'brightness(1)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'center top' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'center bottom' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left center' },
          '25%': { 'background-size': '400% 400%', 'background-position': 'center top' },
          '50%': { 'background-size': '400% 400%', 'background-position': 'right center' },
          '75%': { 'background-size': '400% 400%', 'background-position': 'center bottom' },
        },
        magneticHover: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(2px, -2px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
          '75%': { transform: 'translate(-2px, -1px) rotate(0.5deg)' },
        },
        liquidMove: {
          '0%, 100%': { 
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'translate(0, 0) rotate(0deg)',
          },
          '25%': { 
            'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'translate(10px, -5px) rotate(90deg)',
          },
          '50%': { 
            'border-radius': '50% 60% 30% 60% / 60% 40% 60% 40%',
            transform: 'translate(-5px, 10px) rotate(180deg)',
          },
          '75%': { 
            'border-radius': '60% 40% 60% 40% / 30% 60% 70% 40%',
            transform: 'translate(-10px, -5px) rotate(270deg)',
          },
        },
        textReveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%) rotateX(-90deg)',
            filter: 'blur(10px)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(50%) rotateX(-45deg)',
            filter: 'blur(5px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%) rotateX(0deg)',
            filter: 'blur(0px)',
          },
        },
        particleFloat: {
          '0%': {
            transform: 'translateY(100vh) translateX(0) rotate(0deg) scale(0)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
            transform: 'translateY(90vh) translateX(10px) rotate(36deg) scale(1)',
          },
          '50%': {
            transform: 'translateY(50vh) translateX(-20px) rotate(180deg) scale(1.2)',
          },
          '90%': {
            opacity: '1',
            transform: 'translateY(10vh) translateX(15px) rotate(324deg) scale(0.8)',
          },
          '100%': {
            transform: 'translateY(-10vh) translateX(0) rotate(360deg) scale(0)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
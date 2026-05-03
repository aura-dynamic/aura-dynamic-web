/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0B1F3A",
          800: "#132A4A",
          700: "#1D4ED8",
          600: "#2563EB",
          500: "#3B82F6",
          400: "#60A5FA",
        },
        accent: {
          500: "#6366F1",
        },
        gray: {
          50: "#F7F9FC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5F1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        aura: {
          bg: "#F6F7F9",
          dark: "#0B0D10",
          blue: "#3B82F6",
          text: "#0B0D10",
          'text-secondary': "#6B7280",
          white: "#FFFFFF",
          hairline: "rgba(11, 13, 16, 0.10)",
          'hairline-dark': "rgba(246, 247, 249, 0.12)",
        }
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },

      spacing: {
        'section': '80px',
        'container': '1200px',
      },

      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        'aura': '28px',
      },

      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.06)',
        cardHover: '0 10px 30px rgba(0,0,0,0.10)',
        'aura': '0 18px 50px rgba(11, 13, 16, 0.10)',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'aura-bg': '#F6F7F9',
        'aura-dark': '#0B0D10',
        'aura-blue': '#3B82F6',
        'aura-text': '#0B0D10',
        'aura-text-secondary': '#6B7280',
        'aura-hairline': 'rgba(11, 13, 16, 0.10)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'aura': '28px',
      },
      boxShadow: {
        'aura': '0 18px 50px rgba(11, 13, 16, 0.10)',
      },
    },
  },
  plugins: [],
}
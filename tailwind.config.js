/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary)",
          heading: "var(--brand-heading)",
          black: "var(--brand-black)",
          white: "var(--brand-white)",
          text: "var(--brand-text)",
          border: "var(--brand-border)",
          grayDark: "var(--brand-gray-dark)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
      },
      fontFamily: {
        heading: "var(--heading-font)",
        body: "var(--body-font)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      animation: {
        rotate360: 'rotate360 10s linear infinite',
        marquee: 'marquee 20s linear infinite', 
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: { 
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      transitionDuration: { 
        '600': '600ms',
      }
    },
  },
  plugins: [],
};
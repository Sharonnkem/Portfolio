/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#060816",
        },
        brand: {
          50: "#eef8ff",
          100: "#d6edff",
          200: "#afd9ff",
          300: "#79bdff",
          400: "#4399ff",
          500: "#1f79ff",
          600: "#115de0",
          700: "#1148b4",
          800: "#143f8f",
          900: "#183772",
        },
        sand: "#f5efe7",
      },
      boxShadow: {
        soft: "0 20px 80px rgba(10, 14, 35, 0.18)",
        glow: "0 0 0 1px rgba(255, 255, 255, 0.08), 0 20px 80px rgba(31, 121, 255, 0.24)",
      },
      fontFamily: {
        heading: ['"Sora"', "sans-serif"],
        body: ['"Manrope"', "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 36%), linear-gradient(135deg, rgba(31,121,255,0.28), transparent 45%), linear-gradient(160deg, #0a1022 0%, #060816 52%, #11193a 100%)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

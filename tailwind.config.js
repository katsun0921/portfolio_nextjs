module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pc": "url('/image/hero-pc.jpg')",
        "hero-sp": "url('/image/hero-sp.jpg')",
      },
      zIndex: {
        "-999": "-999",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

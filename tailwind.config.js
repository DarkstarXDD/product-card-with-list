/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "24rem",
      md: "36rem",
      lg: "90rem",
    },

    fontFamily: {
      body: ["Red-Hat-Text", "sans-serif"],
    },

    fontSize: {
      "preset-1": [
        "2.5rem",
        { lineHeight: "1.2", letterSpacing: "0px", fontWeight: "700" },
      ],

      "preset-2": [
        "1.5rem",
        { lineHeight: "1.25", letterSpacing: "0px", fontWeight: "700" },
      ],

      "preset-3": [
        "1rem",
        { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "600" },
      ],

      "preset-4": [
        "0.875rem",
        { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "400" },
      ],

      "preset-5": [
        "0.875rem",
        { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "600" },
      ],
    },

    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      green: "hsl(159, 69%, 38%)",

      red: {
        DEFAULT: "hsl(14, 86%, 42%)",
        hover: "hsl(14, 86%, 31%)",
      },

      rose: {
        50: "hsl(20, 50%, 98%)",
        100: "hsl(13, 31%, 94%)",
        300: "hsl(14, 25%, 72%)",
        400: "hsl(7, 20%, 60%)",
        500: "hsl(12, 20%, 44%)",
        900: "hsl(14, 65%, 9%)",
      },
    },

    extend: {
      gridTemplateRows: {
        "button-overlap": "1fr auto auto",
      },

      gridTemplateColumns: {
        main: "1fr minmax(24rem, auto)",
        "cart-item": "auto 1fr",
        "foodItems-md": "repeat(auto-fit, minmax(13.25rem, 1fr))",
        "foodItems-lg": "repeat(auto-fit, 15.625rem)",
        modalItem: "auto auto",
      },
    },
  },
  plugins: [],

  future: {
    hoverOnlyWhenSupported: true,
  },
}

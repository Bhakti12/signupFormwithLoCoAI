/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1b1818",
          "200": "rgba(0, 0, 0, 0.8)",
        },
        black: "#000",
        "shade-white": "#fff",
        "primary-500": "#eb5017",
        orangered: "#cd3700",
        silver: "#bcbcbc",
        "grey-500": "#667185",
        gainsboro: {
          "100": "#e3e3e3",
          "200": "rgba(228, 219, 219, 0.7)",
        },
        "grey-400": "#98a2b3",
        "primary-500-main": "#4b4efc",
        "grey-900": "#101928",
        "grey-100": "#f0f2f5",
        "grey-700": "#344054",
      },
      spacing: {},
      fontFamily: {
        "paragraph-small-semibold": "Inter",
      },
      borderRadius: {
        mini: "15px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      lg: "18px",
      "41xl": "60px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

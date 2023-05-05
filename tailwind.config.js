/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "1xl": [
        "24px",
        {
          lineHeight: "31.25px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "28.79px",
          letterSpacing: "-0.02em",
          fontWeight: "600",
        },
      ],
      "3xl": [
        "34px",
        {
          lineHeight: "42px",
          letterSpacing: "-0.03em",
          fontWeight: "600",
        },
      ],
      "4xl": [
        "64px",
        {
          lineHeight: "83px",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
    },
    animation: {
      "spin-slow": "spin 10s linear infinite",
    },
  },
  plugins: [],
};

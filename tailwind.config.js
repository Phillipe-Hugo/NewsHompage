/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "almost-white": "#FFFDFA",
      "dark-space-blue": "#00001A",
      "gun-metal": "#5E607A",
      "light-vermillion": "#F15D51",
      silver: "#C5C6CE",
      yellow: "#E9AA52",
    },
    extend: {
      fontSize: {
        xl: ["56px", "56px"], // Heading (XL)
        l: ["40px", "40px"], // Heading (L)
        m: ["32px", "32px"], // Heading (M)
        s: ["20px", "24px"], // Heading (S)
        xs: ["18px", "24px"], // Heading (XS)
        body: ["15px", "26px"], // Body text
      },
      fontWeight: {
        "extra-bold": "800", // Assuming 'Extra Bold' maps to 800 weight
        bold: "700", // Bold
      },
    },
  },
  plugins: [],
};

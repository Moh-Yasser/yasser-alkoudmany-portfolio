export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E14",
        elev: "#11151D",
        ink: "#E6E9F0",
        dim: "#8892A6",
        accent: "#5B7CFA",
        line: "rgba(230,233,240,0.09)"
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}

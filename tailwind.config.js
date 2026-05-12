/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#03040a",
        panel: "rgba(255,255,255,0.07)",
        violet: "#7C3CFF",
        electric: "#13D7FF",
        aurora: "#B66CFF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(19, 215, 255, 0.22)",
        violet: "0 0 80px rgba(124, 60, 255, 0.28)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(19,215,255,.22) 0, transparent 32%), linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

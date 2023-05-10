/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        beige: "#F3EAD4",
        brown: "3F332B",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      height: {
        450: "450px",
      },
      aspectRatio: {
        "2/1": "2/1",
      },
      backgroundImage: {
        shoemaking: "url('./pages/img/shoemaking-unsplash.jpg')",
        "home-banner": "url('./pages/img/jia-ye-erHlzWCN6zQ-unsplash.jpg')",
        desiccant: "url('./pages/img/desiccant-banner.jpg')",
      },
    },
  },
  plugins: [],
};

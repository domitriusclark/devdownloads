module.exports = {
  theme: {
    extend: {
      screens: {
        // => @media (min-width: 640px) { ... }
        sm: "640px",
        // => @media (min-width: 768px) { ... }
        md: "768px",
        // => @media (min-width: 1024px) { ... }
        lg: "1024px",
        // => @media (min-width: 1280px) { ... }
        xl: "1280px",
        // => @media (min-width: 1440px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1920px) { ... }
        "3xl": "1921px",
      },
    },
    colors: {
      "green-accent": "#00ffb2",
      "primary-blue": "#161a2b",
      "primary-text": "white",
      "discord-blue": "#0066ff",
      white: "#ffffff",
      pink: "#E7017A",
      orange: "#DF4A1F",
    },
  },
  content: ["./src/**/*.{njk,md,html}", "./src/_includes/**/*.njk"],
};

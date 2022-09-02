module.exports = {
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
    },
    colors: {
      "green-accent": "#00ffb2",
      "primary-blue": "#161a2b",
      "primary-text": "white",
      "discord-blue": "#0066ff",
      "white": "#ffffff",
      "pink": "#E7017A",
      "orange": "#DF4A1F",
    }
  },
  content: [
    "./src/**/*.{njk,md,html}",
    "./src/_includes/**/*.njk"
  ]
};






const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-background": "#1E1A1B",
        "custom-blue-color": "#013df5",
        "custom-dark-blue-color": "#032BA6",
        "custom-grey-color": "#9e9d9d",
        "custom-light-hover": "#e8e8e8"
      },
    },
  },
  plugins: [],
};

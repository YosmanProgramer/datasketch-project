module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./layouts/**/*.html"],
    options: {
      safelist: [
        "bg-tools-sm-es",
        "md:bg-tools-lg-es",
        "bg-spaces-sm-es",
        "md:bg-spaces-lg-es",
        "bg-accompaniment-sm-es",
        "md:bg-accompaniment-lg-es",
        "bg-tools-sm-en",
        "md:bg-tools-lg-en",
        "bg-spaces-sm-en",
        "md:bg-spaces-lg-en",
        "bg-accompaniment-sm-en",
        "md:bg-accompaniment-lg-en",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      165: "165px",
      380: "380px",
    },
    extend: {
      inset: {
        18: "4.5rem",
        "-18": "-4.5rem",
      },
      lineHeight: {
        "extra-tight": "0.75",
      },
      colors: {},
      fontFamily: {},
      backgroundImage: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  corePlugins: {
    container: false,
  },
};

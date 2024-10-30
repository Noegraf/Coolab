/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: "#6E3DFF",
        h1: "#615D6C",
        border: "#BAB8C1",
        borderSubmit: "#D5D2FF",
        containerSubmit: "#DBD9DE",
        colorSubmit: "#F7F7F8",
        verificationColor: "#75CA5E",
        backgroundFirstTime: "#F2F2FF",
        lila: "#CF80FF",
        blackLila: "#1F076E",
        turquesa: "#9280FF",
      },
      height: {
        150: "150px",
      },
      width:{
        150: "150px",
      }
    },
  },
  plugins: [],
};

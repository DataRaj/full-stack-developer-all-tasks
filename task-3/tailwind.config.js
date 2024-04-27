/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-colors-bg-3": "#f7faff",
        white: "#fff",
        lightgray: "#cbcbcb",
        "text-colors-text-color-1": "#1a3875",
        dimgray: "#676666",
        "text-colors-text-color-3": "#000",
        gray: "#111",
        firebrick: "#d04141",
        green: "#148714",
        steelblue: "#405e9c",
        goldenrod: "#ffcb49",
        mediumslateblue: "#7464ff",
        mediumaquamarine: "#4fd2b5",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      "3xs": "10px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

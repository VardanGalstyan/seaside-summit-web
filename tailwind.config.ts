import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2F80ED",
        darkBlue: "#001A34",
        lightBlue: "#42C8F1",
        merchOrange: "F1A61E",
        red: "#B92B4E",
        orange: "#F68C36",
        gray: "#F7F7F7",
        darkGray: "#8C979A",
        dark: "#1F2C4C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      maxWidth: {
        qhd: "2560px",
      },
    },
  },
  plugins: [],
};
export default config;

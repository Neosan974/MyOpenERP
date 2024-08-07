import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default <Partial<Config>>{
  content: [
    "presets/**/*.{js,vue,ts}", // this is optional if you are using @nuxtjs/tailwindcss
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
      },
    },
  },
};

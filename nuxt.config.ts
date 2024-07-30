import path from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  modules: [
    "@nuxt/eslint",
    [
      "nuxt-primevue",
      {
        components: {
          prefix: "Prime",
          exclude: [],
        },
        options: {
          ripple: true,
          unstyled: true,
        },
        importPT: { from: path.resolve(__dirname, "./presets/wind") },
        // importPT: {from: "~/presets/wind", as: "Wind"}
        // importPT: {from: "~/presets/aura", as: "Aura"}
        // importPT: {from: "~/presets/lara", as: "Lara"}
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
});

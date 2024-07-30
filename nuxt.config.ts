import path from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
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
  ],
  /* primevue: {
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,
        options: {
          prefix: "Prime",
          darkModeSelector: "system",
          cssLayer: false,
        },
      },
    },
  }, */
});

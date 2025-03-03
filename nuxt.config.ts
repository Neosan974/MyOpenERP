// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/supabase"],
  compatibilityDate: "2025-03-03",
  supabase: {
    redirect: false,
  }
})
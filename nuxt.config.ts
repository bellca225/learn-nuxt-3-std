// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
});
module.exports = {
  telemetry: true,
};

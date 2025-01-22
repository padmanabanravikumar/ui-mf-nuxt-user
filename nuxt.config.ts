// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  extends: [['github:padmanabanravikumar/ui-mf-nuxt-core#master', { install: true }]],
  routeRules: {
    '/users/**': {
      ssr: false
    }
  }
})

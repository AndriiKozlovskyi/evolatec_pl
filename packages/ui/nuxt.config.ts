import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
    {
      path: './storyblok',
      pathPrefix: false,
      global: true,
    },
  ],
})

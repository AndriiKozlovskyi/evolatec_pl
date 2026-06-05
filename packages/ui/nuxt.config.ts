import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  components: [
    {
      path: fileURLToPath(new URL('./components', import.meta.url)),
      pathPrefix: false,
    },
    {
      path: fileURLToPath(new URL('./storyblok', import.meta.url)),
      pathPrefix: false,
      global: true,
    },
  ],
})

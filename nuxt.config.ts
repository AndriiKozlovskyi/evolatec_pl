export default defineNuxtConfig({
  extends: ['../evolatec_de/packages/ui'],

  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',

    [
      '@storyblok/nuxt',
      {
        accessToken: '',
        apiOptions: {
          region: 'eu',
        },
        useApiClient: true,
        enableSudoMode: false,
        bridge: import.meta.dev,
      },
    ],

    '@nuxt/image',

    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
    },

    display: 'swap',

    preload: true,

    prefetch: true,

    preconnect: false,

    download: true,

    inject: false,
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '../evolatec_de/packages/ui/tailwind.config',
  },

  image: {
    format: ['avif', 'webp'],
    quality: 80,
    densities: [1, 2],

    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      failOnError: false,
    },
  },

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: 'preload',
          href: '/fonts/Inter-normal-400-latin.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },

        {
          rel: 'preload',
          href: '/fonts/Inter-normal-500-latin.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },

        {
          rel: 'preload',
          href: '/fonts/Inter-normal-600-latin.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },

        {
          rel: 'preload',
          href: '/fonts/Inter-normal-700-latin.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },

        {
          rel: 'preload',
          href: '/fonts/Inter-normal-800-latin.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },

        {
          rel: 'preload',
          href: '/fonts/material-symbols-outlined.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },

        {
          rel: 'icon',
          type: 'image/webp',
          href: '/logo.webp?v=1',
        },

        {
          rel: 'shortcut icon',
          href: '/logo.webp?v=1',
        },

        {
          rel: 'apple-touch-icon',
          href: '/logo.webp?v=1',
        },
      ],

      meta: [
        {
          name: 'theme-color',
          content: '#002c50',
        },
      ],
    },
  },
});

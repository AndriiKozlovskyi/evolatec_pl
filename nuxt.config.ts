export default defineNuxtConfig({
  extends: ['./packages/ui'],

  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',

    [
      '@storyblok/nuxt',
      {
        accessToken: '6KUOFHPF7VHQtU2nvaMSYgtt',
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

    subsets: ['latin', 'latin-ext'],

    display: 'swap',

    preload: true,

    prefetch: false,

    preconnect: false,

    download: true,

    inject: true,
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '',
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
      routes: ['/blog-sitemap.xml'],
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
        {
          name: 'google-site-verification',
          content: 'IE-OeCkQ-EL2CgW7KaETUPPGQuI6xWJ704hNoA-Jd0o',
        },
      ],
    },
  },
});

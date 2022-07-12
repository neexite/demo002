module.exports = {
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  ssr: true,
  target: 'server',

  head: {
    title: 'demo002',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  axios: {
    // proxy: true
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
  ],

  serverMiddleware: ['~/api/testAPI.js'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  pwa: {
    icon: {
      /* icon options */
    },
    workbox: {
      enabled: true
      /* workbox options */
    }
  }
}

export default {
  //mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: /*process.env.npm_package_name || ''*/ 'appio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    scripts: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: 'bootstrap/dist/css/bootstrap.min.css', lang: 'css' },
    { src: '@fortawesome/fontawesome-free/css/all.min.css', lang: 'css' },
    { src: 'animate.css/animate.min.css', lang: 'css' },
    { src: '~assets/app/app.css', lang: 'css' },
    { src: 'animate.css/animate.min.css', lang: 'css' },
    { src: 'owl.carousel/dist/assets/owl.carousel.css', lang: 'css' },
    { src: 'owl.carousel/dist/assets/owl.theme.default.css', lang: 'css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  '~plugins/sofbox.js',
  '~plugins/i18n.js'
  ],

  target: 'static',

  router: {
    base: '/',
    middleware: 'i18n'
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/sitemap',
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyCR5CwdgEmhgSU7kV6lcQnvjqTziI2s35s",
      authDomain: "appio-labs.firebaseapp.com",
      databaseURL: "https://appio-labs.firebaseio.com",
      projectId: "appio-labs",
      storageBucket: "appio-labs.appspot.com",
      messagingSenderId: "314386062516",
      appId: "1:314386062516:web:c31c7417a3872591874be1",
      measurementId: "G-GKV76DETS0"
    },
    services: {
      analytics: true,
      performance: true,
    }
  },
  sitemap: {
    hostname: 'https://appio.site',
    lastmod: '2020-10-27',
    sitemaps: [
      {
        path: '/sitemap.xml',
        routes: ['/', '/es/'],
        gzip: true
      }/*, {
        path: '/sitemap.xml',
        routes: ['bar/1', 'bar/2'],
        exclude: ['/**']
      }*/
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    /*extractCSS: {
      allChunks: true
    },*/
    splitChunks: {
      layouts: true
    },
    //vendor: ['jquery', 'bootstrap'],
    extend (config, ctx) {},
    babel: { compact: true }
  },
  server: {
    port: 5700 // default: 3000
  },
  vue: {
    config: {
      ignoredElements: [
        'rs-module-wrap', 'rs-module', 'rs-bgvideo', 'rs-slides', 'rs-layer', 'rs-static-layers', 'rs-progress', 'rs-slide', 'rs-3'
      ]
    }
  }
}

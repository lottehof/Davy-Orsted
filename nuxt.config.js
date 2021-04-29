const axios = require("axios");

export default {
    target: 'static', // default is 'server'
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testcms',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Davy&Ørsted' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baskervville&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway&display=swap'},
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js', async: true, defer: true},
      { src: "//app.storyblok.com/f/storyblok-latest.js?t=6VEe757Atuepg6h4rcvVhAtt"}

     ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      '~/plugins/components',
      '~/plugins/filters',

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    [

    'storyblok-nuxt',
    {
      accessToken:
        process.env.NODE_ENV == "production"
        ? '6VEe757Atuepg6h4rcvVhAtt'
        : 'MdHadtAQmrRPNZCLaWawBwtt',
      cacheProvider: 'memory'
    }
  ],

    '@nuxtjs/recaptcha',
    'bootstrap-vue/nuxt',
    ],

    generate:{
      routes: function(){
        return axios.get('https://api.storyblok.com/v1/cdn/stories?version=published&token=6VEe757Atuepg6h4rcvVhAtt&starts_with=nieuws&cv=' +
        Math.floor(Date.now() / 1e3)
    ).then(res => {
      const blogPosts = res.data.stories.map(bp => bp.full_slug);
      return [
        '/',
        '/overons',
        'contact',
        '/hand-made',
        '/jachthaven',
        '/nieuws',
        ...blogPosts
      ]
    });

      }
    },
    recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6LecVIQaAAAAAKkNfv0QQdiQfC8xELH871d-B1gi', // Site key for requests
    version: 2, // Version
    size: 'invisible' // Size: 'compact', 'normal', 'invisible' (v2)
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

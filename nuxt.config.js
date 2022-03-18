const pkg = require('./package')


module.exports = {
  mode: 'history' ,
  // server: {
  //   host: '62.113.98.94'
  // },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#409EFF' },

  css: [
    
    // '@/theme/index.scss',
    '@/assets/css/style.min.css',
    'element-ui/lib/theme-chalk/index.css',
  ],

  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'http://kulinariagel.ru'
  },

  env: {
    appName: 'kulinariagel.ru'
  },

  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {

    }
  }
}

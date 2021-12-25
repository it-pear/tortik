const pkg = require('./package')


module.exports = {
  mode: 'universal',
  
  head: {
    title: pkg.name,
    server: {
      host: '62.113.98.94'
    },
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
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss',
    '@/assets/css/style.min.css'
  ],

  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  env: {
    appName: 'SSR blog'
  },

  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {

    }
  }
}

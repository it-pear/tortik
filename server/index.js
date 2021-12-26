const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = require('./app')

const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  const nuxt = new Nuxt(config)
  
  const {
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 80
  } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(nuxt.render)

  app.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })
}
start()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')
const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const orderRoutes = require('./routes/order.routes')
const categoriesRoutes = require('./routes/category.routes')
const commentRoutes = require('./routes/comment.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, {userNewUrlParser: true})
  .then(() => console.log('MongoDB connected...'))
  .catch(error => console.error(error))

  app.use(passport.initialize())
  passport.use(passportStrategy)
  
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  
  
  app.use('http://62.113.98.94/api/auth', authRoutes)
  app.use('http://62.113.98.94/api/post', postRoutes)
  app.use('http://62.113.98.94/api/order', orderRoutes)
  app.use('http://62.113.98.94/api/category', categoriesRoutes)
  app.use('http://62.113.98.94/api/comment', commentRoutes)
  
  module.exports = app
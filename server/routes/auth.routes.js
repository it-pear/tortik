const {Router} = require('express')
const passport = require('passport')
const {login, createUser} = require('../controllers/auth.controller')
const router = Router()

// http://62.113.98.94:3000/api/auth/login
router.post('/admin/login', login)

// http://62.113.98.94:3000/api/auth/create
router.post(
  '/admin/create',
  passport.authenticate('jwt', {session: false}),
  createUser
)

module.exports = router


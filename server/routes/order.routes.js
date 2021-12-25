const passport = require('passport')
const {Router} = require('express')
const ctr = require('../controllers/order.controller')
const router = Router()

// api/order/admin
router.post(
  '/admin/',
  // passport.authenticate('jwt', {session: false}),
  ctr.create 
)

router.get(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.getById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.update
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.remove
)


// base
router.get('/', ctr.getAll)
router.get('/cart', ctr.getAll)
router.get('/:id', ctr.getById)
router.get('/:category', ctr.getById)


router.put('/add/view/:id', ctr.addView)


module.exports = router


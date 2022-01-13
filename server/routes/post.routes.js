const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/post.controller')
const router = Router()

// api/post/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'), 
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
  ctr.update,
)
router.put(
  '/uploudImage/:id',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  ctr.uploudImage,
)
router.put(
  '/updateImage/:id',
  passport.authenticate('jwt', {session: false}), 
  ctr.updateImage
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.remove
)

router.get(
  '/admin/get/analytics',
  passport.authenticate('jwt', {session:false}),
  ctr.getAnalytics
)

// base
router.get('/', ctr.getAll)
router.get('/:id', ctr.getById)
router.get('/:category', ctr.getById)


router.put('/add/view/:id', ctr.addView)


module.exports = router


const {Router} = require('express')
const {create} = require('../controllers/comment.controller')
const router = Router()

// http://62.113.98.94:3000/api/comment
router.post('/', create)

module.exports = router

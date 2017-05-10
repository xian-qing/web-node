const express = require('express')
const router = express.Router()
router.get('/n', require('../controller/test.js').inter)
router.get('/n/get', require('../controller/test.js').get)
router.get('/n/add', require('../controller/test.js').add)
module.exports = router
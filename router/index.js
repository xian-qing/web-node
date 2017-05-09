const express = require('express')
const router = express.Router()
router.get('/n', require('../controller/test.js').inter)
router.get('/n/get', require('../controller/test.js').get)
module.exports = router
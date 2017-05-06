const express = require('express')
const router = express.Router()
router.get('/n', require('../controller/test.js').inter)
module.exports = router
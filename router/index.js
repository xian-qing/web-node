const express = require('express')
const router = express.Router()
router.get('/test', require('../controller/test.js').inter)
module.exports = router
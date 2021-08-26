const user = require('../Controllers/userController')
const router = require('express').Router()

router.get('/', user.showUsers)

module.exports = router
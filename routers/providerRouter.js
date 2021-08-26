const provider = require('../Controllers/providerController')
const router = require('express').Router()

router.get('/', provider.showProvider)

module.exports = router
const router = require('express').Router()
const userRouter = require('./userRouter')
const providerRouter = require('./providerRouter')

router.get('/', (req, res) => {
    res.render('masukinFileEJS')
})

router.use('/users', userRouter)
router.use('/providers', providerRouter)

module.exports = router
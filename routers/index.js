const router = require('express').Router()
const userRouter = require('./userRouter')

router.get('/', (req, res) => {
    res.render('./Home/home.ejs')
})

router.use('/users', userRouter)

module.exports = router
const user = require('../Controllers/userController')
const router = require('express').Router()
const session = require('express-session')
const { checkLogin } = require('../Middlewares/login')


router.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
router.get('/', user.home)

router.get('/login', user.login)
router.get('/register', user.register)
router.post('/register', user.postRegister)
router.get('/getHelp', checkLogin, user.getHelp)
router.get('/getHelp/:serviceId', user.showPsychologist)
router.get('/appointment', user.showAppointments) 
router.get('/logout', user.logout) 

module.exports = router
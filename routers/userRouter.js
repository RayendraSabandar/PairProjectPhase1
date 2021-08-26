const user = require('../Controllers/userController')
const router = require('express').Router()
const session = require('express-session')
const { checkLogin } = require('../Middlewares/login')

router.get('/', user.home)
router.get('/register', user.register)
router.post('/register', user.postRegister)

router.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

router.get('/login', user.login)
router.post('/login', user.postLogin)

router.use(checkLogin)

router.get('/getHelp', user.getHelp)
router.get('/getHelp/:service_provided', user.showPsychologist)
router.get('/makeAppointment/:providerId', user.makeAppointment)
router.post('/makeAppointment/:providerId', user.postMakeAppointment)
router.get('/appointment', user.showAppointments) 
router.get('/logout', user.logout) 

module.exports = router
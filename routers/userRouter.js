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

router.get('/register', user.register)
router.post('/register', user.postRegister)
router.get('/login', user.login)
router.post('/login', user.postLogin)
router.get('/getHelp', checkLogin, user.getHelp) //checkloginnya nnati di taro di router.use aja. sesuaikan penempatannya, semua route yang ada dibawah middleware akan menggunakan middlewarenya
router.get('/getHelp/:serviceId', user.showPsychologist)
router.get('/makeAppointment/:providerId', user.makeAppointment)
router.get('/appointment', user.showAppointments) 
router.get('/logout', user.logout) 

module.exports = router
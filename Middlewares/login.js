const session = require('express-session')

function checkLogin(req, res, next){
    if(req.session.isLogin) {
        next()
    } else {
        res.redirect('/users/register')
    }
}

module.exports = {checkLogin}
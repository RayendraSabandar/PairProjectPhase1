const {User} = require('../models')

class user {
    static home(req,res){
        res.send(req.session.id)
    }

    static login(req,res){
        req.session.isLogin = true
        req.session.email = 'test@gmail.com'
        res.send('logged in succesfully')
    }

    static register(req,res){
        res.render('./users/register.ejs')
    
    }
    
    static postRegister(req,res){
        let {first_name, last_name, dob, email, password} = req.body
        User
        .create({
            first_name,
            last_name,
            dob,
            email,
            password,
        })
        .then(data => res.redirect('/users/login'))
        .catch(err => res.send(err))
    }

    static getHelp(req, res){
        if(req.session.isLogin){
            res.send('getHelp')
        } else {
            res.redirect('/users/login')
        }
    }

    static showPsychologist(req, res){
        res.send('showPsyc')
    
    }

    static showAppointments(req, res){
        res.send('showApp')
    }

    static logout(req,res){
        req.session.destroy()
        res.send('logged out succesfully')
    }

}

module.exports = user
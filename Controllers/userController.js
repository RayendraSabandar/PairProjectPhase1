const {User, Provider} = require('../models')
const {checkPassword} = require('../helpers/bcrypt')
const { generatePassword } = require('../helpers/generatePassword')

class user {
    static home(req,res){
        res.send(req.session.id)
    }

    static login(req,res){
        res.render('./users/login')
    }
    static postLogin(req,res){
        let {email, password} = req.body
        User.findOne({
            where: {email,}
        })
        .then(data => {
            if(data){
                let checking = checkPassword(password, data.password)
                if(checking){
                    req.session.isLogin = true
                    req.session.email = data.email
                    req.session.userId = data.id
                    res.redirect('/users/getHelp')
                } else {
                    res.send('incorrect password')
                }
            } else {
                res.send('invalid email')
            }
        })
        .catch(err => res.send(err))
    }

    static register(req,res){
        let suggestion = generatePassword()
        res.render('./users/register.ejs', {suggestion})
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
        .catch(err => res.send(err.message))
    }

    static getHelp(req, res){
        if(req.session.isLogin){
            Provider
            .findAll()
            .then(data => {
                // res.send(data)
                res.render('./users/getHelp.ejs', {data})
            })
        } else {
            res.redirect('/users/login')
        }
    }

    static showPsychologist(req, res){
        res.send('showPsyc')
    
    }

    static makeAppointment(req, res){
        res.send('make appointment')
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
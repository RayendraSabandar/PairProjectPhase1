const {User, Provider, Appointment} = require('../models')
const {checkPassword} = require('../helpers/bcrypt')
const { generatePassword } = require('../helpers/generatePassword')

class user {
    static home(req,res){
        res.render('./users/home.ejs')
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
        .catch(err => res.send(err.message))
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
        const params = req.params.service_provided
        Provider.findAll({
            where: 
            { 
                service_provided: params 
            }
        }, 
        )
        .then(data => {
            res.render('users/getHelpByService.ejs', {data})
        })
        .catch(err => res.send(err.message))
    }

    static makeAppointment(req, res){
        let id = req.params.providerId
        Provider
        .findAll({
            where : {
                id,
            }
        })
        .then(data => {
            res.render('./users/makeAppointment.ejs', {data: data[0]})
        })
    }

    static postMakeAppointment(req, res){
        let fullDate = req.body.date.split('-')
        let year = fullDate[0]
        let month = fullDate[1]
        let date = fullDate[2]

        let fullTime = req.body.time.split(':')
        let hours = fullTime[0]
        let minutes = fullTime[1]
        
        Appointment
        .create({
            appointment :new Date(year, month, date, hours, minutes),
            UserId : req.session.userId,
            ProviderId : req.params.providerId
        })
        .then(data => {
            res.redirect('/users/getHelp')
        })
    }

    static showAppointments(req, res){
        let id = req.session.userId;
        User
        .findByPk(id,{
            include : [{
                model : Provider
            }]
        })
        .then(data => {
            // res.send(data)
            res.render('Appointments/show.ejs', {data,})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static logout(req,res){
        req.session.destroy()
        res.send('logged out succesfully')
    }

}

module.exports = user
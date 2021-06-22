const { validationResult } = require('express-validator');
const User = require('../models/user_model');
const passport = require('passport');
require('../config/passport_local')(passport);

const loginFormunuGoster = (req, res, next) => {
    res.render('login', { layout: './layout/auth_layout.ejs' });
}

const loginOl = (req, res, next) => {
    console.log(req.body);
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })(req, res, next);
    //  res.render('login', { layout: './layout/auth_layout.ejs' });
}


const registerFormunuGoster = (req, res, next) => {
    console.log(req.flash('validation_error'));
    res.render('register', { layout: './layout/auth_layout.ejs' });
}

const registerEkle = async (req, res, next) => {
    const hatalar = validationResult(req);
    if (!hatalar.isEmpty()) {

        req.flash('validation_error', hatalar.array())
        res.redirect('/register');
        // console.log(hatalar.array());
        //  res.render('register', { layout: './layout/auth_layout.ejs', hatalar: hatalar.array() });
    } else {
        try {
            const _user = await User.findOne({
                email: req.body.email
            });
            if (_user) {
                req.flash('validation_error', [{ msg: "Bu mail daha önce alınmış" }]);
                res.redirect('/register');
            } else {
                const newUser = new User({
                    email: req.body.email,
                    ad: req.body.ad,
                    soyad: req.body.soyad,
                    parola: req.body.parola,
                });
                await newUser.save();
                console.log('Kullanıcı eklendi');
                req.flash('success_message', [{ msg: "Giriş yapabilirsiniz." }])
                res.redirect('/login');
            }
        } catch (error) {

        }
    }
    console.log(req.body); //formdan gelen değerleri consola yazdır.
}

const forgotPasswordFormunuGoster = (req, res, next) => {
    res.render('forgot_password', { layout: './layout/auth_layout.ejs' }); //bu ejs uzantılı dosyayı ekrana bas
}

const forgotPassword = (req, res, next) => {
    console.log(req.body);
    res.render('forgot_password', { layout: './layout/auth_layout.ejs' }); //bu ejs uzantılı dosyayı ekrana bas
}

module.exports = {
    loginFormunuGoster,
    registerFormunuGoster,
    forgotPasswordFormunuGoster,
    registerEkle,
    loginOl,
    forgotPassword
}
const { validationResult } = require('express-validator');

const loginFormunuGoster = (req, res, next) => {
    res.render('login', { layout: './layout/auth_layout.ejs' }); //default olarak views klasörüne bakıldığı için
}

const login = (req, res, next) => {
    console.log(req.body);
}


const registerFormunuGoster = (req, res, next) => {
    res.render('register', { layout: './layout/auth_layout.ejs' }); //default olarak views klasörüne bakıldığı için
}

const register = (req, res, next) => {
    const hatalar = validationResult(req);
    if (!hatalar.isEmpty()) {
        req.flash('validation_error', hatalar.array());
        req.flash('email', req.body.email);
        req.flash('ad', req.body.ad);
        req.flash('soyad', req.body.soyad);
        req.flash('sifre', req.body.sifre);
        req.flash('resifre', req.body.resifre);
        res.redirect('/register');

    }
    // console.log(req.body);

}

const forgotPasswordFormunuGoster = (req, res, next) => {
    res.render('forgot_password', { layout: './layout/auth_layout.ejs' }); //default olarak views klasörüne bakıldığı için
}

const forgotPassword = (req, res, next) => {
    console.log(req.body);
    res.render('forgot_password', { layout: './layout/auth_layout.ejs' }); //default olarak views klasörüne bakıldığı için
}

module.exports = {
    loginFormunuGoster,
    registerFormunuGoster,
    forgotPasswordFormunuGoster,
    register,
    login,
    forgotPassword
}
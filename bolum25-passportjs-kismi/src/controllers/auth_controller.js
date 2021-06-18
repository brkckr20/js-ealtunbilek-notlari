
const loginFormunuGoster = (req,res,next) => {
    res.render('login', {layout : './layout/auth_layout.ejs'});
}

const loginOl = (req,res,next) => {
    console.log(req.body);
    res.render('login', {layout : './layout/auth_layout.ejs'});
}


const registerFormunuGoster = (req,res,next) => {
    res.render('register', {layout : './layout/auth_layout.ejs'});
}

const registerEkle = (req,res,next) => {
    console.log(req.body); //formdan gelen değerleri consola yazdır.
    res.render('register', {layout : './layout/auth_layout.ejs'});
}

const forgotPasswordFormunuGoster = (req,res,next) => {
    res.render('forgot_password', {layout : './layout/auth_layout.ejs'}); //bu ejs uzantılı dosyayı ekrana bas
}

const forgotPassword = (req,res,next) => {
    console.log(req.body);
    res.render('forgot_password', {layout : './layout/auth_layout.ejs'}); //bu ejs uzantılı dosyayı ekrana bas
}

module.exports = {
    loginFormunuGoster,
    registerFormunuGoster,
    forgotPasswordFormunuGoster,
    registerEkle,
    loginOl,
    forgotPassword
}
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

//veritabanı bağlantısı
require('./src/config/database');

const MongoDBStore = require('connect-mongodb-session')(session);
const sessionStore = new MongoDBStore({
    uri: process.env.MONGODB_CONNECTION_STRING,
    collection: 'sessionlar'
});


//session ve flash message
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, // parametreler kullanılmalıdır.
    saveUninitialized: true, //parametreler kullanılmalıdır.
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 //cookieyi 1 gün sonra sil demiş olduk
    },
    store: sessionStore
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.validation_error = req.flash('validation_error');
    res.locals.success_message = req.flash('success_message');

    res.locals.login_error = req.flash('error');
    next();
})

app.use(passport.initialize());
app.use(passport.session());


//routerlerin include edilmesi
const authRouter = require('./src/routes/auth_router');
const yonetimRouter = require('./src/routes/yonetim_router');


//formdan gelen verilerin okunabilmesi için
app.use(express.urlencoded({ extended: true }))



/* template engine ayarları */
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views')); //bizim views klasörümüz.
/* template engine ayarları sonu*/

app.use(express.static('public')); //public klasörünü dışa açma / görev çubuğunda görünmemesi için

app.use('/', authRouter);
app.use('/yonetim', yonetimRouter);

app.get('/', (req, res) => {
    res.send('<h1 style="text-align:center"> Anasayfa </h1>')
});

app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.HOST}:${process.env.PORT} portundan çalışıyor...`);
});
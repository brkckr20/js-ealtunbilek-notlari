const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash')

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
    resave: false,
    saveUninitialized: true,
    cookie : {
       // maxAge : 1000 // 1 sn sonra silinsin 
       maxAge : 1000 * 60 * 60 * 24 //1 gün sonra silinsin
    },
    store : sessionStore
}))


app.use(flash());
app.use((req,res,next) => {
    res.locals.validation_error = req.flash('validation_error');
    res.locals.email = req.flash('email');
    res.locals.ad = req.flash('ad');
    res.locals.soyad = req.flash('soyad');
    res.locals.sifre = req.flash('sifre');
    res.locals.resifre = req.flash('resifre');
    next();
})

//routerlerin dahil edilmesi
const authRouter = require('./src/routes/auth_router');


//formdan gelen değerlerin okunabilmesi için parse edilmesi
app.use(express.urlencoded({ extended: true }))


//template engine ayarları
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
app.use(expressLayouts);
app.use(express.static('public')); //eklenen css lerin kullanılabilmesi için gereklidir. yani bu klasörün içinde demek için

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views')); //custom views klasörümüz - src altında arayacaktır

let sayac = 0;

app.get('/', (req, res) => {
    if (req.session.sayac) {
        req.session.sayac++;
    } else {
        req.session.sayac = 1;
    }
    sayac++;
    res.json(
        {
            mesaj: "Merhaba dünya!",
            sayacim: sayac,
        }
    )
})

app.use('/', authRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.HOST}${process.env.PORT} portundan ayaklandı`);
});
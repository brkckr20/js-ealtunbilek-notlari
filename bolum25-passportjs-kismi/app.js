const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')

const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

//veritabanı bağlantısı
require('./src/config/database');


 /* template engine ayarları */
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'./src/views')); //bizim views klasörümüz.
/* !! template engine ayarları */

app.use(express.static('public')); //public klasörünü dışa açma / görev çubuğunda görünmemesi için

app.get('/', (req, res) => {
    res.json({
        mesaj: "Anasayfa"
    })
});


app.get('/login', (req,res) => {
    res.render('login', {layout : './layout/auth_layout.ejs'});
});

app.get('/register', (req,res) => {
    res.render('register', {layout : './layout/auth_layout.ejs'});
});

app.get('/forgot_password', (req,res) => { //şu istek gelirse
    res.render('forgot_password', {layout : './layout/auth_layout.ejs'}); //bu ejs uzantılı dosyayı ekrana bas
});


app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.PORT} portundan çalışıyor...`);
});
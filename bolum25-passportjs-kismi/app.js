const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')

const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

//veritabanı bağlantısı
require('./src/config/database');

//routerlerin include edilmesi
const authRouter = require('./src/routes/auth_router');


//formdan gelen verilerin okunabilmesi için
app.use(express.urlencoded({ extended: true }))



/* template engine ayarları */
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views')); //bizim views klasörümüz.
/* !! template engine ayarları */

app.use(express.static('public')); //public klasörünü dışa açma / görev çubuğunda görünmemesi için

app.use('/', authRouter);

app.get('/', (req, res) => {
    res.json({
        mesaj: "Anasayfa"
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.PORT} portundan çalışıyor...`);
});
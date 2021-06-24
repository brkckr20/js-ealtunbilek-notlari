const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

//veritabanı bağlantısı
require('./src/config/database');


//template engine ayarları
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src')); //custom views klasörümüz - src altında arayacaktır

app.get('/', (req,res) => {
    res.json(
        {
            mesaj : "Merhaba dünya!"
        }
    )
})

app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.HOST}${process.env.PORT} portundan ayaklandı`);
});
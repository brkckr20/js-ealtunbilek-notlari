const express = require('express'); //dışarıya e adında bir metot export edilmiştir
const app = express();
const kullaniciRouter = require('./router/kullanici_router');
const anasayfaRouter = require('./router/anasayfa_router');
const bilinmeyenRoyer = require('./router/404-router');
app.use(express.json()); //post isteklerinin çalışması için gereklidir.


app.use('/',anasayfaRouter);

app.use('/users',kullaniciRouter); //users ile başlayan bütün isteklerde

app.use(bilinmeyenRoyer);

//use her türlü istekte çalışır.

app.listen(3000,() => {
    console.log("Server 3000 portu ile dinliyor.");
});
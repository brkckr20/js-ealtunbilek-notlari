const express = require('express');
const app = express();
const path = require('path');

const ejs = require('ejs');

app.set('view engine', 'ejs'); // view engine yerine ejs kullan demiş olduk
//ana dizinde index.ejs olusturuldu onun üzerinde çalışmalar yapılacak


app.get('/', (req, res) => {
    /* res.send({
        mesaj : "Merhaba"
    }) */
    // res.sendFile(path.resolve(__dirname, 'index.html')); //dosya yolunun dinamik olması için


    const kisiler = [
        {
            ad: 'emre',
            id: 1
        },
        {
            ad: 'emre2',
            id: 2
        },
        {
            ad: 'emre3',
            id: 3
        }
        , {
            ad: 'emre4',
            id: 4
        }
    ];
    const dersAdi = "Nodejs dersi";
    const yas = 23;
    const renkler = ["sarı","kırmızı","beyaz"];
    res.render('index',{
        kisiler : kisiler,
        ders : dersAdi,
        yas : yas,
        renkler
    }); // index.ejs demek
})

app.listen(3000, function () {
    console.log("3000 portu dinleniyor.");
});
const express = require('express');
const app = express();

function m1(req,res,next) {
    console.log("m1 eyim");
    next(); //next diyerek sıralamaya göre bir sonraki middlewatre'a git demiş olduk
}

function m2(req,res,next) {
    console.log("m1 deyim");
}

app.use(m1); //sıralamaya göre 1. middleware
app.use((req,res,next) => {
    console.log("m2 deyim");
    res.send("m2 tamamlandı"); //tarayıcıya yanıt göndererek isteği sonlandırmış olduk
    //kendinden sonraki gelen isteklerdeki res.send() metotları çalışmaz
    //onun için mantıken ekrana yazdırma konusundaki işlemler son middleware de yapılmalıdır.
    req.zaman = Date.now(); //middlewareler arasında taşınabilir.
    next();
});


app.use('/', (req,res) =>{
    console.log("m3 yani kök dizin rotasındayız... ve istek zamanı : " + req.zaman);
})

console.log("burada");


app.listen(3000, () => {
    console.log("3000 portu dinleniyor.");
});


//middleware => yapılan her bir istekten response a kadar olan yolculukta kullanılan ara programlardır diyebiliriz.
//middleware dediğimiz yapı bir fonksiyondan başka birşey değildir.





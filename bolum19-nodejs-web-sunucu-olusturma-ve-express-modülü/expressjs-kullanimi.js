const express = require('express'); //dışarıya e adında bir metot export edilmiştir
const app = express();
const Joi = require('@hapi/joi');

app.use(express.json()); //post isteklerinin çalışması için gereklidir.

const kullanicilar = [
    {
        id : 1,
        ad : "Burak",
        yas : 29
    },
    {
        id : 2,
        ad : "Hakan",
        yas : 12
    },
    {
        id : 3,
        ad : "Pelin",
        yas : 22
    }
];


app.get('/',(req,res) => { //şu adrese gelen isteklerde şu fonksiyonu çalıştır demektir.
    console.log("Anasayfa");
    res.send("Burasi home page"); //res.end() demeye gerek yoktur.
});

app.get('/users', (req,res) => {

    //strig query istekleri
    if (req.query.ters) { // eğer gelen istek içinde test parametresi var ise
        //http://localhost:3000/users?ters=true
        res.send(kullanicilar.reverse());
    }
    else{

        res.send(kullanicilar);
    }
    
   // console.log("Users");
})


app.get('/users/:id', (req,res) => { //parametre ile istek
   // console.log(req.params.id);
   const bulunanUser = kullanicilar.find((user) => user.id === parseInt(req.params.id));
   if (bulunanUser) {
       res.send(bulunanUser);
   }else{
      // res.send(req.params.id + " id'li kullanici bulunamadi");
       res.status(404).send(req.params.id + " id'li kullanici bulunamadi"); //isteğe bağlı
   }
})

app.post('/users', (req,res) => {

    /**
     * postmanda istek yaparken body kısmına istek yaparken yapılacak isteğin
     * özelliklerinin yazılması gerekir.
     * 
     */
    // joi modülü ile doğrulama işlemi
    const { error } = kullaniciBilgileriniKontrolEt(req.body); //object destructring yapıldı. bize dönen obje içerisinde error isimli bir değer var ben onunla ilgileniyorum dedik.
    // console.log(sonuc); 
    if (error) {
        res.status(400).send(error.details[0].message);
    }else{
        const yeniKullanici = {
        id : kullanicilar.length + 1,
        ad : req.body.ad,
        yas : req.body.yas
     }
        kullanicilar.push(yeniKullanici);
        res.send(yeniKullanici);
    }

    
});


//put metodu ile güncelleme işlemleri

app.put("/users/:id", (req,res) => {
   const bulunanUser = kullanicilar.find((user) => user.id === parseInt(req.params.id));
        if (!bulunanUser) { //kullanıcı bulunamama durumu
        return res.status(404).send(`${req.params.id} idli kullanıcı bulunamadı..`);
        //return edilmemesi durumunda hata ile karşılaşılır.
    }else{

        const { error } = kullaniciBilgileriniKontrolEt(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
        }else{
            bulunanUser.ad = req.body.ad; //isteğin bodysinden gelen
            bulunanUser.yas = req.body.yas;

            res.send(bulunanUser);
        }
           

            
        } 
    }
);


app.delete('/users/:id', (req,res) => {
    const bulunanUser = kullanicilar.find((user) => user.id === parseInt(req.params.id));
   if (bulunanUser) {
       const bulunanKullanicinIndexi = kullanicilar.indexOf(bulunanUser);
       kullanicilar.splice(bulunanKullanicinIndexi,1);
       res.send(bulunanUser);

   }else{
      // res.send(req.params.id + " id'li kullanici bulunamadi");
       res.status(404).send(req.params.id + " id'li kullanici bulunamadi"); //isteğe bağlı
   }


   /**
    * postmanda silme işlemi yaparken istek url altında bulunan body içeriği none seçilmelidir.
    * 
    */
})


//kod tekrarını engellemek için eklendi
function kullaniciBilgileriniKontrolEt(user) {
    const schema = Joi.object({
        ad : Joi.string().min(3).max(30).required(), //string olmalı,min 3 karakter olmalı, max 30 karakter ve zorunlu olmalı
        yas : Joi.number().integer().min(10).max(50),
    });

    return schema.validate(user);
}


app.listen(3000,() => {
    console.log("Server 3000 portu ile dinliyor.");
});
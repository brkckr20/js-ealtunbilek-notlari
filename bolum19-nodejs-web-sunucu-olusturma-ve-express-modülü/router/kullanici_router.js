const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');

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

router.get('/', (req,res) => {

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


router.get('/:id', (req,res) => { //parametre ile istek
   // console.log(req.params.id);
   const bulunanUser = kullanicilar.find((user) => user.id === parseInt(req.params.id));
   if (bulunanUser) {
       res.send(bulunanUser);
   }else{
      // res.send(req.params.id + " id'li kullanici bulunamadi");
       res.status(404).send(req.params.id + " id'li kullanici bulunamadi"); //isteğe bağlı
   }
})

router.post('/', (req,res) => {

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

router.put("/:id", (req,res) => {
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


router.delete('/:id', (req,res) => {
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

module.exports = router;
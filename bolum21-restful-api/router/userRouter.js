const router = require('express').Router();
const User = require('../models/userModel');
var createError = require('http-errors')

router.get('/', async (req, res) => {
    const tumUserler = await User.find({})
    res.json(tumUserler);
});

router.get('/:id', (req, res, next) => {
    res.json({ mesaj: `${req.params.id} ID'li kullanici listeleniyor.` });
});


//post isteği
router.post('/', async (req, res, next) => {
    try {
        const eklenecekUser = new User(req.body);
        const {error, value} = eklenecekUser.joiValidation(req.body);
        if(error){
            next(createError(400,error));   
        }else{
            const sonuc = await eklenecekUser.save();
            res.json(sonuc);
        }
    } catch (err) {
        next(err);
    }
});


//GÜNCELLEME İŞLEMİ
router.patch('/:id', async (req, res, next) => {
    /*
        kullanıcının her ne durumda olursa olsun müdahale etmesini
         istemediğimiz alanları post ederse onları işleme
          almadan önce silme işlemi
    */
    
          delete req.body.createdAt;
          delete req.body.updatedAt;
          delete req.body.sifre;



    try {
        const sonuc = await User.findByIdAndUpdate({
            _id: req.params.id,
        }, req.body, //güncellenecek alanlar. restful2.http içerisinden gelen
            {
                new: true, //güncellendikten sonraki halini getirmesi için
                runValidators: true //güncelleme de doğrulamanın çalışması için gerekli
            }
        );
        if (sonuc) {
            return res.json(sonuc)
        } else {
            return res.json({
                mesaj: "Güncellenecek kullanıcı bulunamadı..."
            })
        }
    } catch (error) {
        // console.log("Güncelleme sırasında hata : " + error);
        next(createError(400, error));
    }
});

//delete - silme işlemleri
router.delete('/:id', async (req, res, next) => {
    try {
        const sonuc = await User.findByIdAndDelete({
            _id: req.params.id
        });
        if (sonuc) {
            return res.send({
                mesaj: "Kullanıcı silindi..."
            })
        } else {
            /* const hataNesnesi = new Error('Kullanıcı bulunamadı');
            hataNesnesi.hataKodu = 404;
            throw hataNesnesi; */
            throw createError(404, 'Kullanıcı bulunamadı veya silinmiş....');
            /* return res.status(404).json({
                mesaj: "Kullanıcı bulunamadı veya silinmiş"
            }) */
        }
    } catch (error) {
        next(createError(400, error));
    }

});

module.exports = router;
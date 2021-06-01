const router = require('express').Router();
const User = require('../models/userModel')

router.get('/', async (req, res) => {
    const tumUserler = await User.find({})
    res.json(tumUserler);
});

router.get('/:id', (req, res) => {
    res.json({ mesaj: `${req.params.id} ID'li kullanici listeleniyor.` });
});


//post isteği
router.post('/', async (req, res) => {
    try {
        const eklenecekUser = new User(req.body);
        const sonuc = await eklenecekUser.save();
        res.json(sonuc);
    } catch (err) {
        console.log("Kayıt yapılırken hata oluştu : " + err);
    }
});


//GÜNCELLEME İŞLEMİ
router.patch('/:id', async (req, res) => {
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
        console.log("Güncelleme sırasında hata : " + error);
    }
});

//delete - silme işlemleri
router.delete('/:id', async (req, res) => {
    try {
        const sonuc = await User.findByIdAndDelete({
            _id: req.params.id
        });
        if (sonuc) {
            return res.send({
                mesaj: "Kullanıcı silindi..."
            })
        } else {
            return res.status(404).json({
                mesaj: "Kullanıcı bulunamadı veya silinmiş"
            })
        }
    } catch (error) {
        console.log("Silerken hata oluştu..");
    }

});

module.exports = router;
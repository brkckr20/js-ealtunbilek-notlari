const express = require('express');
const router = express.Router();

router.get('/',(req,res) => { //şu adrese gelen isteklerde şu fonksiyonu çalıştır demektir.
    console.log("Anasayfa");
    res.send("Burasi home page"); //res.end() demeye gerek yoktur.
});

module.exports = router;
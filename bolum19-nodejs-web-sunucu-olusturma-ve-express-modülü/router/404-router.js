const express = require('express');
const router = express.Router();

router.use((req,res) => { //şu adrese gelen isteklerde şu fonksiyonu çalıştır demektir.
    res.send("404 sayfa bulunamadı"); //res.end() demeye gerek yoktur.
});

module.exports = router;
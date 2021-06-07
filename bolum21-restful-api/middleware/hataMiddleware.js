const hataYakalayici = (err, req, res, next) => {
    //sistemin kendi içerisinde olan uyarılar.
    /* if (err.name === "CastError") {
        res.json(
            {
                mesaj: "Geçerli bir numara veriniz..."
            }
        )
    }else{
        res.json(
            {
                mesaj : err.message,
                hataKodu : err.hataKodu
            }
        )
    } */

    console.log(err);

    // http-errors paketinden gelen veriler için kullanıldı.
    if (err.code === 11000) {
        return res.json({
            hataKodu: err.statusCode,
            mesaj: Object.keys(err.keyValue) + " için girdiğiniz " + Object.values(err.keyValue) + " değeri daha önce alınmış..",
        })
    }
    if (err.code === 66) {
        return res.json({
            mesaj : "Sabit bir alanı değiştirmek istediniz. Değiştirilemez!!!"
        })
    }
    if (err.code) {
        return res.json({
            hataKodu : err.statusCode,
            mesaj : Object.keys(err.keyValue)
        })
    }

};

module.exports = hataYakalayici;
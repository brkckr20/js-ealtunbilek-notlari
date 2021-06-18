const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("Veri tabanı bağlantısı başarılı.");
    })
    .catch((hata) => {
        console.log(`Veritabanı bağlantı hatası : ${hata}`);
    });
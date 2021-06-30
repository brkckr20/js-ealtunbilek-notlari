const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {
        useCreateIndex : true,
        useUnifiedTopology : true,
        useNewUrlParser : true,
        useFindAndModify : true
    })
    .then(console.log("Veritabanı bağlantısı başarılı"))
    .catch((hata) => { console.log(`Veri tabanı bağlantı hatası ${hata}`); })
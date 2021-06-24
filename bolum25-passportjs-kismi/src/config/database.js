const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {
        useCreateIndex : true,
        useUnifiedTopology : true,
        useNewUrlParser : true,
        useFindAndModify : true
    })
    .then(console.log("Vertabanı bağlantısı başarılı"))
    .catch((hata) => { console.log(`Veri tabanı bağlantı hatası ${hata}`); })
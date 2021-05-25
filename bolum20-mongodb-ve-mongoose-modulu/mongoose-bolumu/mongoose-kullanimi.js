const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true, useUnifiedTopology : true }).then((_) => { //parametreler geçilmelidir.
    console.log("Veritabanına bağlanıldı");
}).catch(error => {
    console.log("Bağlantı hatası : " + error);
});

const userSchema = new mongoose.Schema({
    isim : String
});

const User = mongoose.model('user',userSchema);

const burak = User({
    isim : "Burak"
});

burak.save().then(sonuc => {
    console.log(sonuc);
}).catch(hata => {
    console.log(hata);
})
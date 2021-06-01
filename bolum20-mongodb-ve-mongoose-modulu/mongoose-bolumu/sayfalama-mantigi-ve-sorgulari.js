const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser : true, useUnifiedTopology : true })
.then( _ => {
    console.log("Veritabanına bağlanıldı...");
}).catch(error => {
    console.log(`Veri tabanı bağlantı hatası : ${error}`);
});

const userSchema = new Schema({/* _id : String  */},{collection : 'kullanicilar'})
const User = mongoose.model('user',userSchema);

const sayfaNumarasi = 2;
const sayfaBasinaGonderi = 10;
User.find({})
    .skip((sayfaNumarasi - 1) * sayfaBasinaGonderi)
    .limit(10)
    .then(sonuc => {
    console.log(sonuc);
})
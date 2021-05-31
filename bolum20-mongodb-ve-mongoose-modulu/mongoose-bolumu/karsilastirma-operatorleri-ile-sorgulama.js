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

//id'ye göre bul
/* User.findById('60b4f65d9d0e121c185ee41e').then(sonuc => {
    console.log(sonuc);
}); */


//tek eleman bulma
/* User.findOne({age : 23}).then(kullanici => {
    console.log(kullanici);
}); */


//karşılaştırma operatorleri - karşılaştırma operatörü dediğimiz zaman aklımıza $ işareti gelsin.
/**
 *  eq : eşitlik anlamındadir. - equals
 *  ne : eşit olmayan - not equals
 *  gt : büyüktür - greather then
 *  gte : hem büyük hem eşit - greather then equals
 *  lt : küçük - less then
 *  lte : hem küçük hem eşit olan - less then equals
 *  in : içinde - in
 *  nin : içinde değil - not in
 */
/* User.find({age : {$gte : 25, $lte : 35} } //bu iki değer dahil arasındakiler gelsin demiş olduk
    ,{name : 1, age : 1}).then(userlar => {
    console.log(userlar);
}); */

User.find({age : {$in : [23,36]} } //içerisinde şu değerler olanları getir demiş olduk
    ,{name : 1, age : 1}).then(userlar => {
    console.log(userlar);
});
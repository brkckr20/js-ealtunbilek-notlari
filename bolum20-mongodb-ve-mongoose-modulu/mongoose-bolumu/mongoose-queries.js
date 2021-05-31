const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser : true, useUnifiedTopology : true })
.then( _ => {
    console.log("Veritabanına bağlanıldı...");
}).catch(error => {
    console.log(`Veri tabanı bağlantı hatası : ${error}`);
});

const userSchema = new Schema({},{collection : 'user'})
const User = mongoose.model('user',userSchema);


/* User.find(
{
    age : 23 //age = 23 olanları getir demiş olduk
},
{
    name : 1, //getirilmesi istenilen alanlar 1 olarak tanımlanır.
    company : 1,
    _id : 0 //getirilmesi istenilmeyen alanlar 0 olarak tanımlanır.
},
{
    limit : 1,
    skip : 2 //ilk şu kadarını es geç
})
//.countDocuments() //o kritere göre kayıt sayısı
.then((tumUserler) => {
    console.log(tumUserler);
}) */


//yukarıdakinin metot zinciri yapılarak kullanılması işlemi
User.find({age : 23})
.limit(3)
.sort({name : -1})
.select({name : 1, address : 1})
.then(sonuclar => {console.log(sonuclar)});
//tersten sıralamada sorttaki değer -1 olmalıdır.
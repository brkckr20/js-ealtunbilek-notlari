const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser : true, useUnifiedTopology : true })
.then( _ => {
    console.log("Veritabanına bağlanıldı...");
}).catch(error => {
    console.log(`Veri tabanı bağlantı hatası : ${error}`);
});

const userSchema = new Schema({ //güncellemede bu alanlar şart
    age : Number,
    eyeColor : String,
    name : String
},{collection : 'kullanicilar'})
const User = mongoose.model('user',userSchema);


//güncelleme işlemi - findByIdAndUpdate
/* User.findByIdAndUpdate('60b4f65d9d0e121c185ee41e',{ //güncellenecek olan değerler obje olarak verilir.
    age : 21
},{
    new : true,//new : true yapılırsa yapılan işlemden sonra güncellenen veriyi döndürür. yapılmazsa güncelleme öncesi halini verir.
    lean : true // sorgunun neredeyse 10 kat daha hızlı çalışmasını sağlar. - direkt javascript objesi olarak döndürür.
 }).then((sonuc) => { 
    console.log(sonuc);//işlem sonrasında güncellenecek elemanı döndürür.
}); */


//güncelleme işlemi - updateOne
/* User.updateOne({ index : 5 }, { eyeColor: "Mor" })
    .then((sonuc) => {
        console.log(sonuc);
    }); */

/* User.updateMany({index : 5},{name : "Burak Çakır"}).then(sonuc => {
    console.log(sonuc);
}); */


User.deleteMany({index : {$lte : 3 }}).then(sonuc => {
    console.log(sonuc);
});


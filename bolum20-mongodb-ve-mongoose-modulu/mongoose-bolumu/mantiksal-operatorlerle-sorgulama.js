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


//and kullanımı örnek
/* User.find({},{name : 1 , _id : 0 , age : 1, eyeColor : 1})
    .and([{ age : 39 }, { eyeColor : "brown" }])
    .then(userler => {
        console.log(userler);
    }); */


//or kullanımı ornek
/* User.find({},{name : 1 , _id : 0 , age : 1, eyeColor : 1})
    .or([{ age : 39 }, { eyeColor : "brown" }])
    .countDocuments()
    .then(userler => {
        console.log(userler);
    }); */


// and or ornek
User.find({},{name : 1 , _id : 0 , age : 1, eyeColor : 1, isActive : 1})
    .and([{isActive : true }])
    .or([{ age : 39 }, { eyeColor : "brown" }])
    //.countDocuments()
    .then(userler => {
        console.log(userler);
    });

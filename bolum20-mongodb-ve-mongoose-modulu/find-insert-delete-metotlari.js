//object desstructring ile ayrı tanımlaması yapıldı aşağıda
/* const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const ObjectID = mongodb.ObjectID; */
//object destructring ile kullanımı
const { MongoClient,ObjectID } = require('mongodb');

const dataBaseUrl = 'mongodb://localhost:27017';
const databaseName = 'node-dersleri';


MongoClient.connect(dataBaseUrl,{useUnifiedTopology : true, useNewUrlParser : true}, (error,result) => { //ikinci parametreyi bizden opsiyonel olarak bekliyor. yazılması gereklidir.
    if (error) { //hata alırsak
        console.log("Dbye bağlanılamadı..." + error);
    }
    console.log("Bağlantı başarılı.");
    const db = result.db(databaseName);

    //promise olarak kullanabilmek için toArray ile arraya çevirilmelidir.
    db.collection('users').find({ad : "Burak"}/* ,{limit : 3} */).toArray().then(bulunanVeriler => {
        console.log(bulunanVeriler.length);
    });

    //cursorun kendi limiti vardır.
    db.collection('users').find({ad : "gamze"}).limit(2).toArray().then(oku => {
        console.log(oku);
    })


    db.collection('users').find({ad : "ali"}).count().then(sayi => {
        console.log(sayi);
    });


    //tek bi sonuç getirme - örneğin herkesin kendine has maili olduğu için maile göre arama gibi
    db.collection('users').findOne({ad : "Burak"}).then(sonuc => {
        console.log("findOne" , sonuc);
    });

    //id'si şu olan sonucu getir demek
    db.collection('users').findOne({_id : new ObjectID('60ac9b62ae7a513530ea40a2')}).then(idLiSonuc => {
        console.log(idLiSonuc);
    })


});
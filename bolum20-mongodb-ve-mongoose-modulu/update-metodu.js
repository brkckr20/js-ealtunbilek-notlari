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

    db.collection('users').updateMany({ad : "Yeni Burak"},{
        $set : {
            ad : "Burak"
        },
        $inc : {
            yas : 50
        }
    }).then(sonuc => {
        console.log(sonuc);
    })


});
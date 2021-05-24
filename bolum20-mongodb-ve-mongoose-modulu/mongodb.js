const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dataBaseUrl = 'mongodb://localhost:27017';
const databaseName = 'node-dersleri';


MongoClient.connect(dataBaseUrl,{useUnifiedTopology : true, useNewUrlParser : true}, (error,result) => { //ikinci parametreyi bizden opsiyonel olarak bekliyor. yazılması gereklidir.
    if (error) { //hata alırsak
        console.log("Dbye bağlanılamadı..." + error);
    }
    console.log("Bağlantı başarılı.");
    const db = result.db(databaseName);
        
    //veri ekleme
    db.collection('users').insertOne({
        ad : "Burak",
        yas : 29,
        evliMi : false,
    },(error,sonuc) => {
        if (error) {
            console.log("Veri eklenemedi " + error);
        }else{
            console.log(sonuc.ops,sonuc.insertedCount); //ops ile salt eklenen veriyi döndürür. Bize lazım olan kısmını
        }
    });


    //promiselerle ile yapımı
    db.collection('users').insertOne({
        ad : "ali",
        yas : 12
    }).then(sonuc => {
        console.log(sonuc.ops);
    })
    .catch(hata => {
        console.log("Promise hatalıı" + hata);
    })
});
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

    const myId = new ObjectID();
    console.log(myId);
    console.log(myId.getTimestamp()); //idnin (o verinin) eklenme saatini verir.

    //timestamp için veri ekleme örneği
    db.collection('test').insertOne({
        id : myId,
        ad : "Filiz",
        updatedId : myId
    }).then(sonuc => {
        console.log(sonuc.ops);
    })



        
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



    //insertmany kullanımı
    db.collection('users').insertMany([
        {
            ad : "gamze",
            okul : "paü"
        },
        {
            ad : "veli",
            il : "denizli"
        }
    ]).then(sonuc => {
        console.log(sonuc.ops);
    }).catch(hata => {
        console.log(hata);
    })


    //odev - urunler tablosu olustur veri ekle
    db.collection('urunler').insertMany([
        {
            urun_adi : "Elma",
            renk : "beyaz",
            tazeMi : true
        }
    ]).then(sonuc => {
        console.log(sonuc);
    });
});
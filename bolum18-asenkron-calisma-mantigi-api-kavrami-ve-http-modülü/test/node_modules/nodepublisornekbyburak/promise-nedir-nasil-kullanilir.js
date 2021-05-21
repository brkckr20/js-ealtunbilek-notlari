const myPromise = new Promise((resolve,reject) => { //resolve - işlem başarılı ise, reject - işlem başarısız ise
    //uzun sürmesi beklenen işlem süslü parantezler içerisine yazılır.
    console.log("3 snlik işlem başladı");
    setTimeout(() => {
        console.log("3 snlik işlem bitti");
        resolve("İşlem sonucu burada..."); // burada yakalanan değer sonuç parametresi ile then metoduna aktarıldı
      // reject("Hata oluştu");
    }, 3000);
});

myPromise.then((sonuc) => {
    console.log(sonuc);
}).catch((hata) => {
    console.log(hata);
})
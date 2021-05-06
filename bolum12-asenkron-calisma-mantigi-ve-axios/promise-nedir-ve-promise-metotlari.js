/**
 *  Promise : ingilizce de söz vermek anlamına gelir.
 *
 */

    // promise tanımlama
    // parametre olarak iki tane callback fonksiyon alır.
    // işlemler başarı ile yapıldığnda olmasını istediklerimizi resolve içerisine yazmalıyız.

const myPromise = new Promise((resolve,reject) => {
    //uzun sürecek işlem buraya yazılır.
    setTimeout(function () {
       // console.log("Üç saniyelik işlem tamamlandı.");
       // resolve('Üç saniyelik işlem tamamlandı.'); // işlem başarılı bir şekilde tamamlanırsa

        //hata olması durumunda, hem hata hem başarılı olmayacağı için birini kullanabiliriz.
        reject("Internet bağlantısı yapılamadı...");
    },3000);
});

myPromise.then((sonuc) => { //İşlem tamamlandıktan sonra dönen değeri then metoduna parametre olarak göndererek kullanılır.
    console.log(sonuc);
}).catch((hata) =>  {  //işlem sonucunda hata almamız durumunda yapılacak işlemler
    console.log(hata);
});


//promise örnek
function ogrencileriGetir() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dizi = [];
            for (let i = 0; i < 30; i++) {
                dizi.push({
                    ad : "Öğrenci" + i,
                    id : i+2
                })
            }

            //resolve(dizi); //başarılı ise then ile yakalanır.
            reject("Bir hata var bro"); // hata var ise catch ile yakalanır.


        },2000);
    });
}

ogrencileriGetir()
    .then(ogrenciDizisi => {ogrencileriYazdirmaFonksiyonu(ogrenciDizisi);})
    .catch(hataMesaji => {console.log(hataMesaji)});

function ogrencileriYazdirmaFonksiyonu(gelenDizi) {
    console.log(gelenDizi)
}


/***
 *  promise metotlari
 */

const promiseBasarili = Promise.resolve("Başarılı şekilde döndürülen bir sonuç!!!");
//resolve döndürdüğünü bildiğimiz bir metotdun kısa kullanımı
promiseBasarili.then((sonuc) => {
    console.log(sonuc)});

console.log("----");

const promiseHata = Promise.reject("Hata var! Kısa kullanımı");
//resolve döndürdüğünü bildiğimiz bir metotdun kısa kullanımı
promiseHata.then((sonuc) =>{console.log(sonuc)}).catch((hata) => {console.log(hata)});


const promise1 = new Promise((resolve,reject) => {
    setTimeout(function () {
        resolve("2.5 saniyelik işlem tamamlandı");
    },2500)
});

const promise2 = new Promise((resolve,reject) => {
    setTimeout(function () {
        resolve("4 saniyelik işlem tamamlandı");
    },4000)
});

//gerçekleşmesi gereken promislerileri bir dizi halinde alır ve bize geri döndürür.
//süresi farketmez birbirinden ayrı çalışan promiselerden işlem süresi uzun olan promise göre sonucu döndürür.
Promise.all([promise1,promise2]).then(sonuc => {
    console.log(sonuc)});



//race metodu
//işlem sırasından hangisi kısa sürede tamamlanırsa onu geriye döndürür
Promise.race([promise1,promise2]).then(sonuc => {
    console.log(sonuc);
});


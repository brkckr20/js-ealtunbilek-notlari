//soru 2 - kullanıcıdan alınan değere kadar olan sayılar dizisini fibonacci olarak yazdırın.
//fibonacci sayilari 0 1 1 2 3 5 8 13 21....
//son iki sayının toplamı bir sonraki sayıyı oluşturur.

function fibonacci(sayi) {  
    let sonucDizisi = [0,1]; 
    for (let i = 2; i < sayi; i++) { //dizinin ilk 2 elemanı belli olduğu için indis numarasını 2 den başlattık

        const oanhesaplanasayi = sonucDizisi[ i- 1] + sonucDizisi[ i-2 ];
        if (oanhesaplanasayi < sayi) {
            sonucDizisi[i] = oanhesaplanasayi;
        }
        else{
            break;
        }
        
    }
    return sonucDizisi;
}
console.log(fibonacci(1000));

console.log("--------------");

//soru 3 öğrenciler tutan bir dizi oluşturun
//her bir öğrenci nesnesinde ad, soyad ve id değerleri olsun
//id numarası çift olan öğrencilerin adı ve soyadını birleştirmiş halde tutan diziyi a dan z ye sıralı şekilde ekrana yazdırınız
//bunları yaparken map,filter ve sort metotlarını kullanın
//işlem bittikten sonra kodları arrow function ve zincirleme haline dönüştürün.

const ogrenciler = [
    {
        id : 1,
        ad : "Burak",
        soyad : "Çakır"
    },
    {
        id : 2,
        ad : "Berna",
        soyad : "Ak"
    },
    {
        id : 3,
        ad : "Betül",
        soyad : "Çetin"
    },
    {
        id : 4,
        ad : "Hasan",
        soyad : "Ağaoğlu"
    },
    {
        id : 5,
        ad : "İsmet",
        soyad : "Hakan"
    },
    {
        id : 6,
        ad : "Gamze",
        soyad : "Atlı"
    },
    {
        id : 6,
        ad : "Ahmet",
        soyad : "Defineci"
    },
    
];
const idNoCiftOlanOgrenciler = ogrenciler.filter(function (ogrenci) {
 return ogrenci.id % 2 == 0;
});

const isimleri = idNoCiftOlanOgrenciler.map(function (ogrenci) {
    return ogrenci.ad + " - " + ogrenci.soyad;
  });
isimleri.sort();
console.log(isimleri);



//arrow function şeklinde
const sonucDizisi = ogrenciler.filter(ogrenci => ogrenci.id % 2 == 0)
          .map(ogrenci => ogrenci.ad + " - - " + ogrenci.soyad)
          .sort();
         // .reverse(); -> tesrten sıralama işlemleri
console.log(sonucDizisi);
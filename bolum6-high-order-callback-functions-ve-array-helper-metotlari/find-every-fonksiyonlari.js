const kisiler = [
    {
        id : 1,
        ad : "Burak"
    },
    {
        id : 2,
        ad : "Hakan"
    },
    {
        id : 3,
        ad : "İsmet"
    },
    {
        id : 4,
        ad : "Kemal"
    },
    {
        id : 5,
        ad : "Çetin"
    },
];
function bulmaMetodu(kisiler) {
    for (let i = 0; i < kisiler.length; i++) {
        if (kisiler[i].id == 5) {
            return kisiler[i];
        }
    }
}


const sonuc = kisiler.find(function (kisi) {
    return kisi.id ===2;
  });

/**
 *  İÇERİSİNDE BULUNMAYAN BİR DEĞER ARATTIĞIMIZ ZAMAN UNDEFİNED DÖNDÜRÜR.
 * 
 */

console.log(bulmaMetodu(kisiler));

console.log("----");



/**every ve some metotları
 * 
 * dizi içerisindeki elemanları bir şarta göre kontrol eder. eğer tüm şartlar sağlanıyorsa boolean değer döndürür.
 * 
 */

 const sayilar = [1,2,3,4,5,6,7,8,9,0,9,8,76,5,4,3,3,5,6,4];

const sonuc2 = sayilar.every(function(sayi) { //bütün elemanların bu şarta uyması lazım
     return sayi<10;
 });
 const sonuc3 = sayilar.some(function(sayi) { //içerisinde şarta uyan bi tane dahi eleman olursa geriye true değer döndürür.
     return sayi<10;
 });

 console.log(sonuc2);
 console.log(sonuc3);
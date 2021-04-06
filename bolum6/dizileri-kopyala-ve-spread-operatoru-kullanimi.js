const isimler = ["emre","hasan","ali","ayşe"];

const sayilar = [1,50,2,41,41,84,8,35,3];

const ogrenciler = [
    {id : 1, isim : "emre", yas : 24},
    {id : 22, isim : "hasan", yas : 22},
    {id : 12, isim : "fatma", yas : 43},
    {id : 92, isim : "giray", yas : 12},
    {id : 15, isim : "kemal", yas : 33},
    {id : 44, isim : "ceren", yas : 87},
];

//arraylari kopyalamak
//sıralama işlemlerinde dizinin yapısı bozulacağı için çoğu kez bunu istemeyiz.
let kopya = [];


//basit yöntem
/*for (let isim of isimler){
    kopya.push(isim);
}
console.log(kopya);
console.log(isimler);
*/


//2. yöntem
//kopya = Array.from(isimler);


//spread operator
//isimler dizisindeki elemanları tek tek yollayıp yeni bir dizi oluşturur.
//3 nokta kullanılır.
kopya = [...isimler];
console.log(kopya);

console.log("//////");

//metni bölme ve bölünen metni diziye aktarma
let metin = "burak çakır";
console.log(metin);
/*
let diziyeAktar = metin.split(" ");
spread kullanımında burdaki aynı işlemi yaparız.
*/

let harflerDizisi = [...metin];
console.log(harflerDizisi);


//spread ı fonksiyonda kullanma

function sayilariTopla(...parametreler) {
    let toplam = 0;
    for (let s of parametreler){
        toplam += s;
    }
    console.log(toplam);
}
sayilariTopla(4,3,3);
sayilariTopla(88,8,9,6);
sayilariTopla(88,8,9,6,102,31,6);

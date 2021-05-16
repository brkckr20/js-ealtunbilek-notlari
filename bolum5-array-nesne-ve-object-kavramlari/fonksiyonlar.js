function selamVer() {
    console.log('selam')
}
/*
*   FONKSİYON ÇAĞRILDIĞI ZAMAN ÇALIŞIR.
* */

selamVer();

//PARAMETRELİ FOMKSİYON

function parametreliFonksiyon(a,b) { //fonksiyonun argümanları normal parantezler içerisindekileridir.
    console.log("Sayilarin toplamı : " + (a + b));
}
parametreliFonksiyon(4,6);

//DEĞER DÖNDÜREN PARAMETRELİ FONKSİYON
function geriDondurenFonksiyon(x,y) {
    return x * y;
}

console.log("Sayıların Çarpımı : " + geriDondurenFonksiyon(3,20));

var sayilarinToplami = geriDondurenFonksiyon(3,89); //fonksiyonun geriye döndürdüğü değer bir değişkene atandı.
console.log("Değişkene atanan fonksiyonun toplamı : " + sayilarinToplami);

console.log("********************");

console.log(typeof geriDondurenFonksiyon); //veri tipi nedir. -- function

var toplamlar = 0;
function belirliAraliktakiSayilariTopla(birinciSayi,ikinciSayi) {
    for (var i = birinciSayi;i<ikinciSayi;i++){
        toplamlar = toplamlar + i;
    }
    return toplamlar;
}
console.log("Girilen iki sayı arasındaki sayıların toplamı : "+belirliAraliktakiSayilariTopla(40,42));
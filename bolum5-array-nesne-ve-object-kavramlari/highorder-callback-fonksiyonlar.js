 // bölüm 5 toparlama

let insan = {
    ad : "Burak",
    yas : 32,
    evlimi : false,
}

console.log(typeof insan); // veri tipinin ne olduğunu döndürür.
console.log(insan.ad);



console.log(insan instanceof Number); 
/*  instanceof
    kendisinden önceki değerin veri tipini kendinden sonraki veri tipi ile karşılaştırır
    ve doğruluk durumuna göre true yada false değerini döndürür.

**/

let renkler = ['kırmızı'];
console.log(renkler);
console.log(renkler instanceof Array);
console.log(renkler instanceof Object);

const fonksiyon = function(){
    console.log("merhaba dünya");
}
console.log(fonksiyon);
fonksiyon();

console.log(typeof fonksiyon);
console.log(fonksiyon instanceof Function); //true
console.log(fonksiyon instanceof Array); //false


let sayi = 6
const fonk = function(sayi){
    sayi =  sayi * 2;
    return sayi;
}
console.log(fonk(sayi));


let dizi = [3,5,4];
const diziElemanlariniIkiileCarp = function(dizi){
    for (let i = 0; i < dizi.length; i++) {
       dizi[i] = dizi[i] * 2;        
       
    }
    return dizi;
}
console.log(diziElemanlariniIkiileCarp(dizi));
console.log(dizi); // orijinal dizi değişti
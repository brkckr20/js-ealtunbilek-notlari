/*
*   girilen sayının kaç saniye ve kaç dakika olduğunu bulan kod ödevidir.
*
* */


let sayi = 133;
let bölüm =sayi / 60; // 2
let saniye = sayi % 60; // 26
let bölüm1;
let dakika;
dakika = Math.floor(bölüm); // dakika bulma yuvarlama
console.log( sayi +  " sayısı  : " +dakika + " dakika " + saniye + " saniyediyedir");

/*
*
*
*
*   FAHRENHEİT - CELSİUS SICAKLIK DÖNÜŞME KOD PARÇACIGI
* */


var fahrenheitSicaklikDegeri = 85;
var celsiusSicaklikDegeri;

celsiusSicaklikDegeri = ((5/9) * (fahrenheitSicaklikDegeri - 32)); //fahrenheit sıcak dönüştürme formülü
celsiusSicaklikDegeri = celsiusSicaklikDegeri.toFixed(2); //virgülden sonra 2 karakter gelmesi için

console.log(fahrenheitSicaklikDegeri + " sıcaklık değeri " + celsiusSicaklikDegeri + " değerine eşittir.");


/*
*   artık yıl hesaplama formulü kod parçaçığı
* */

let yil= 2000;
//yil % 400 == 0 ? console.log(yil + " yili artik değil ") : console.log(yil + " yili artık yıl");
if (yil % 400 == 0){
    console.log("artik");
}else{
    console.log("artik değil");
}
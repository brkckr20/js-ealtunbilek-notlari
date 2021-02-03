/*
* soru 10 -> sistem 1 ile 100 arasında bir sayı üretsin. kullanıcının girdiği sayıya göre artır veya azalt şeklinde ekrana uyarı verdirsin.
* */
/*
let uretilenSayi = parseInt(Math.random()*101);
console.log(uretilenSayi);
var tahmin = -1; //while çalışması için
var tahminSayisi = 0;
while (tahmin !=uretilenSayi){
    tahmin = parseInt(prompt("Sayı giriniz.."));
    tahminSayisi++;
    if (tahmin==uretilenSayi){
        console.log("Tebrikler " +  tahminSayisi +" seferde bildiniz");
        break;
    }
    else if(tahmin<uretilenSayi){
        console.log("Arttır");
    }else {
        console.log("Azalt");
    }
    tahminSayisi++;
}
*/

//kullanıcıdan sürekli sayı girmesi istenir. kullanıcı 0 a bastığında girilmiş olan sayıların çarpımını ekrana yazdıran program
/*

let girilenSayi = parseInt(prompt('Sayi giriniz...'));
let carpimSonucu = 1;

while (girilenSayi !=0 ){
    carpimSonucu = carpimSonucu * girilenSayi;
    girilenSayi = parseInt(prompt('Sayi giriniz...'));
}
console.log("Çarpım Sonucu : " + carpimSonucu);*/


//soru -> kullanıcıdan aldığınız iki tam sayısının ebob unu bulunuz. 14 ile 35 in obebi 7 dir.

let sayi1 = parseInt(prompt('Birinci Sayıyı giriniz'));
let sayi2 = parseInt(prompt('Ikinci Sayıyı giriniz'));

let ebob=1,kontrol = 2;

while (kontrol<= sayi1 && kontrol<=sayi2){
    if(sayi1 % kontrol == 0 && sayi2 % kontrol == 0){
        ebob =kontrol;
    }
    kontrol++;
}
if (ebob == 1){
    console.log("Bu sayılar aralarında asaldır");
}
else{
    console.log("Bu sayıların ortak böleni : " + ebob);
}

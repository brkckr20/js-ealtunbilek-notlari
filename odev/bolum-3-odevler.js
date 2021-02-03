let uretilenSayi = (Math.random() * 90)+ 10;
uretilenSayi = Math.floor(uretilenSayi);
/*

console.log(uretilenSayi)

*/
let girilenSayisi = parseInt(prompt("2 basamaklı bir sayı giriniz..", "34"));

let uretilenSayininBirlerBasamagi = uretilenSayi % 10;
/*console.log(uretilenSayininBirlerBasamagi)*/
let uretilenSayininOnlarBasamagi = Math.floor(uretilenSayi / 10);
/*console.log(uretilenSayininOnlarBasamagi)*/


let kullaniciSayininBirlerBasamagi = girilenSayisi % 10;
let kullaniciSayininOnlarBasamagi = Math.floor(girilenSayisi / 10);

if (uretilenSayi === girilenSayisi){
    console.log("Tebrikler bildiniz 10000 tl . Tahmininiz : " + girilenSayisi + " Üretilen Sayı : " + uretilenSayi);
}
else if ((uretilenSayininBirlerBasamagi == kullaniciSayininOnlarBasamagi) &&(uretilenSayininOnlarBasamagi == kullaniciSayininBirlerBasamagi)){
    console.log("Rakamları doğru bildiniz 5000 tl. Sayı : " +  uretilenSayi);
}
else if (uretilenSayininBirlerBasamagi == kullaniciSayininBirlerBasamagi || uretilenSayininOnlarBasamagi == kullaniciSayininOnlarBasamagi){
    console.log("Rakamlardan birini doğru bildiniz 1000 tl. Sayı : " +  uretilenSayi);
}
else{
    console.log("Maalesef Kazanamadınız... Şanslı numara : " + uretilenSayi);
}

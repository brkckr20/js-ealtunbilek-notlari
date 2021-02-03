//soru 1 -> klavyeden girilen 3 sayının ortalamasını bulan program
/*

var girilenSayi1 = parseInt(prompt("Sayı giriniz : "));
var girilenSayi2 = parseInt(prompt("Sayı giriniz : "));
var girilenSayi3 = parseInt(prompt("Sayı giriniz : "));

var ortalama = (girilenSayi1 + girilenSayi2 + girilenSayi3) / 3;
document.write("Ortalama : " + ortalama);


 */

//soru 2 -> klavyeden girilen 3 sayıya göre oluşan üçgen çeşidini bulan programı yazınız.

/*
var sayi1 = parseInt(prompt('Birinci Sayıyı Gir'));
var sayi2 = parseInt(prompt('İkinci Sayıyı Gir'));
var sayi3 = parseInt(prompt('Üçüncü Sayıyı Gir'));

if (sayi1 == sayi2 && sayi2 == sayi3){
    alert("Eşkenar Üçgen girdiniz.");
}
else if (sayi1 == sayi2 || sayi2 == sayi3 || sayi1 == sayi3){
    alert("İkizkenar Üçgen girdiniz.");
}
else if (sayi1 != sayi2 && sayi2 != sayi3){
    alert("Çeşitkenar üçgen girdiniz.");
}
*/


//soru 3-> klavyeden girilen vize ve final notlarının ortalamasına göre öğrencinin notunu hesaplayan ve dersi geçip geçmediğini hesaplayan program (geçme notu : 50, vizenin 40%  ve finalın 60% si).

var vizeNotu = parseInt(prompt('Vize Notunu giriniz'));
var finalNotu = parseInt(prompt('Final Notunu giriniz'));

var ortalama = (vizeNotu*40/100) + (finalNotu * 60 / 100);
if (ortalama>=50){
    alert("Dersi Geçtiniz..");
}
else
{
    alert("Kaldınız..");
}


//soru 4 -> kendi adınızı ekrana tüm döngülerle 5 kere yazdırınız.

for (var i = 0;i<5;i++){
    console.log("Burak " + i);
}
/*
*
*
* */
var sayi = 0;
while (sayi<5){
    console.log("2. Burak " + sayi);
    sayi++;
}

let sayac1 =0;
do {
    console.log("do while ile ekrana 5 kere yazımı " + sayac1);
    sayac1++;

}while (sayac1<5);


//soru 5 -> 1 den 100 e kadar olan sayılan toplamı
var toplam = 0;
for (var i =0;i<100;i++){
    toplam+=i;
}
console.log("Toplam : " + toplam);

//soru 6 -> 1 den 10 a kadar olan sayıları arasında virgül olacak şekilde ekrana yazdıran program
let  yazdirilicakMetin = "";
for (let i = 1;i<=10;i++){
    if (i!=10){
        yazdirilicakMetin = yazdirilicakMetin + i + ", ";
    }else {
        yazdirilicakMetin = yazdirilicakMetin + i;
    }

}
console.log(yazdirilicakMetin);


/*
*   soru 7 -> klavyeden girilen bir sayının faktöriyeli
* */

var sayimiz = parseInt(prompt('Faktöriyeli alınacak sayıyı giriniz'));
var sonucum = 1;
for (var i =1;i<=sayimiz;i++){
    sonucum = sonucum * i;
}
console.log(sonucum);



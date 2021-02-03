//soru 8 -> klavyeden girilen değerlere göre aşağıdaki işlemlri yapınız
/*
* x>0 ve y<0 ise f(x,y) = 4x+2y+4
* x>0 ve y=0 ise f(x,y) = 2x-y+3
* x<0 ve y>0 ise f(x,y) = 3x+4y+3
*
* */

/*
var xDegeri = parseInt(prompt("Birinci sayıyı gir"));
var yDegeri = parseInt(prompt("İkinci sayıyı gir"));
*/

/*
if (xDegeri>0 && yDegeri<0){
    console.log(xDegeri + " ve " + yDegeri + " için sonuc : " +(4*xDegeri + 2*yDegeri + 4));
}
else if (xDegeri>0 && yDegeri == 0){
    console.log(xDegeri + " ve " + yDegeri + " için sonuc : " +(2*xDegeri - yDegeri + 3));
}
else if (xDegeri<0 && yDegeri>0){
    console.log(xDegeri + " ve " + yDegeri + " için sonuc : " +(3*xDegeri + 4*yDegeri + 3));
}
else {
    console.log("Şartlar sağlanmadı");
}
*/

console.log("------------------------");

/*
*   soru 9 -> 100lük sistemde girilen notları harf sistemine çeviren programı yazınız..
*
* */

/*var sayiDegeri = parseInt(prompt('Sınav notunu giriniz...'));
if (sayiDegeri<50 && sayiDegeri>0){
    console.log("Harf notunuz : FF");
}else if (sayiDegeri >50 && sayiDegeri<70){
    console.log("Harf notunuz : DD");
}else if (sayiDegeri >70 && sayiDegeri<=100){
    console.log("Harf notunuz : AA");
}*/
/*
else if (sayiDegeri<0 && sayiDegeri>100){
    console.log("Lütfen 0 ile 100 arasında bir değer giriniz");
}*/


/*
*   soru 10-> çarpım tablosunun ekran görüntüsünü oluşturan programı yazınız
* */
var yazdirilicakMetin = "";
for (var i = 1;i<10;i++){

    for (let j = 1;j<10;j++){
        console.log(i + "x" + j + " = " + i * j + "\t");
    }
}
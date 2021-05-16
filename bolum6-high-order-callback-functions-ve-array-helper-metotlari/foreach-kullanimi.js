let sayilar = [2,5,3,6,3,2,9,7];

for (let i = 0; i < sayilar.length; i++) {
    console.log(sayilar[i]);
}
console.log("***********************************");
for (const item of sayilar) {  //sağdaki değeri of tan önceki değişkene ata
    console.log(item);
}

console.log("////////////////////////////");

sayilar.forEach(function (sayi,index) { //ikinci parametre indis değeri
    console.log(sayi , index);
})

/** kendi foreach metodumuz */

function diziyiYazdir(dizi,callback) {
    for (let i = 0; i < dizi.length; i++) {
       callback(dizi[i] , i);
    }
  }

  diziyiYazdir(sayilar,function (deger,index) {
      console.log("Değer : " + deger + " indexi : " +index );
    })
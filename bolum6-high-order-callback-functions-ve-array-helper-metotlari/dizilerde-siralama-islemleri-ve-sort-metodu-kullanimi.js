const isimler = ["burak","ayşe","hasan","beren","zeynep"];

//diziyi a dan z ye sıralama
const adanZyeSirali = isimler.sort();
console.log(adanZyeSirali);



//diziyi z den a ya sıralama
//reversenin doğru çalışabilmesi için dizin öncesinde sıralanmış olması gereklidir.
const zDenAyaSiralama = adanZyeSirali.reverse();
console.log(zDenAyaSiralama);

console.log("-------");

const sayilar = [1,4,3,6,88,7,4,2,78,9];
const sirali = sayilar.sort(function (a,b) {
    //küçükten büyüğe
    return a-b;

    //büyükten küçüğe
    // return b-a;
});
console.log(sirali);

console.log("-----------------");


const ogrenciler = [
    {id : 12, isim: "Burak", yas : 43},
    {id : 4, isim: "volkan", yas : 12},
    {id : 5, isim: "cemal", yas : 32},
    {id : 334, isim: "ebru", yas : 44},
    {id : 9, isim: "gönül", yas : 29},
];


//ogrenciler.sort(); şeklinde objeyi olduğu gibi geriye döndürür.


var ogrecileriSirala = ogrenciler.sort(function (a,b) {
    return a.id - b.id;
    //id ye göre küçükten büyüğe doğru sıralama işlemi yapar



    //metinsel ifadelere göre sıralama
    //metinlerde çıkarma işlemi yapılamayacağı için harflerin durumuna göre geriye -1,1 ve 0 değerlerini döndürecek bir if koşulu yazdık.
  //  if (a.isim > b.isim){
  //      return -1;
  //  }
  //  else if (a.isim < b.isim){
  //      return 1;
  //  }
  //  else{
  //      return 0;
  //  }


    //ternary olarak kullanımı
   // return (a.isim < b.isim) ? 1 : (a.isim>b.isim ? 1 : 0);
});
console.log(ogrecileriSirala);
let isimler = ["ahmet","metin","burak"];
console.log(isimler);
console.log(isimler.toString()); //normal yazdırma ile tostring ile yazdırmada farklılık vardır. incele
console.log(isimler.join(" | ")); // metinler arasına girilen parametreyi ekler => ahmet | metin | burak
var yeniisimler = isimler.push("kemal"); // diziye elemanlar ekler ve eklendikten sonra dizinin eleman sayısını döndürür.
console.log(yeniisimler);
console.log(isimler);
isimler.pop(); // dizinin son elemanını diziden çıkartır.
console.log(isimler);
isimler.shift(); // dizinin ilk elemanını siler.
console.log(isimler);
isimler.unshift("mehmetçik");
console.log(isimler);

delete isimler[0]; //belirtilen indis numarasınıdaki elemanı siler yerini tutar.
console.log(isimler);

let sayilar = [1,2,3,44,5,53,2,33];
sayilar.splice(7,0,9,12); // 7. elemandan başla, hiçbir elemanı silme, 9 ve 12 yi ekle demiş olduk.
console.log(sayilar);
var sayi = sayilar.splice(0,4); //değişkene atanması durumunda silinen değerleri bir diziye atar ve geriye döndürür.
console.log(sayi);

let teksayilar = [1,3,5,7,9];
let ciftsayilar = [0,2,4,6,8];
var sayiarim = teksayilar.concat(ciftsayilar);  //dizileri birleştirir.
console.log(sayiarim);

var kesilensayilar = sayiarim.slice(2,4); //birinci parametre nereden başla, 2. parametre nereye kadar. (2.parametre dahil değil)
console.log(kesilensayilar);
console.log(kesilensayilar.toString());
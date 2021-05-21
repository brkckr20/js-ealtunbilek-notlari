//array destructing - arraydaki elemanları değişkene atamanın daha kolay yolu denilebilir.
const dizi = ['burak','cakir'];

const ad = dizi[0]; //bunlara gerek kalmaz 
const soyad = dizi[1];

console.log(ad + " " +soyad);
//destructing
//dizinin içeriiğindeki elemanların değişkenlere aktarılması işlemi
let [firstName,lastName] = dizi // var olan değerleri sırasıyla  [] içerisine atıyor.
console.log(firstName);
console.log(lastName);

//üç elemanlı bir dizide ilk ve son elemanları almak istersek bir tane virgül ile boş eleman tanımlaması yapılır.
let [ilk, ,son] = ['sarı','mavi','kırmızı'];


//objenin özelliklerini değişkene atama
let kisi = {};
[kisi.ad, kisi.soyad] = "Ahmet Ak".split(' ');
console.log(kisi.ad + " - " + kisi.soyad);



let [ad1,ad2,...ad3] = ['burak','mahmut','ismet','pelin','gamze','hakan']; 
//ilk parametreyi normal olarak aldıktan sonra üç nokta (...) ile başlayan eleman bir dizi olarak alır.
console.log(ad3);


//varsayılan değerleri atama
let [x1 = "varsayılan atama",y1="bu da diğer varsayılan atama"] = [];
console.log(x1 + " - " + y1);

console.log("-------------------");

//object destructring - obje özelliklerini değişkenlere atama işlemi
let options = {
    title : "Menü",
    width : 200,
    height : 200,
    x : undefined
};

let { title,width,height,x = "varsayılan X" } = options; //isimler aynı olmazsa hata oluştu
//varsayılan olarak bir değer atama yaptığımızda o değer çağrılır   
console.log(title + " " + width + " " + height);
console.log(x);



//değişkenlere kendi istediğimiz ismi vermek
const kisiler = {
    ad : "Burak",
    yas : 29
}
const { ad:adin, yas:yasin} = kisiler
console.log(adin);
//özelliğin adından sonra iki nokta (:) ile o özelliğe kendi istediğimiz değişken adını verebiliriz.


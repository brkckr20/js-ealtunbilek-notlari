/**
 *  array destrunctring
 */
let isimler = ['burak','çakır'];
const [first,last] = isimler; //dizi içerisindeki değerleri bir değişkene atama
console.log(first,last);

let renkler = ["sarı","kırmızı","mavi","yesil","eflatun","pembe"];
const [r1,r2, ,r3] = renkler; //sırada atlama yapmak istersek eğer boş bir virgül bırakarak istemediğimiz değişkeni almayız
console.log(r1,r2,r3);

const [c1,c2,...geriKalanRenkler] = renkler;
console.log(c1,c2,geriKalanRenkler);

 //default - varsayılan değer atama
const [t1,t2,t3="Fenerbahçe",t4="Trabzonspor"] = ["Galatasaray","Denizlispor"];
console.log(t1,t2,t3,t4);






/**
 * 
 * OBJECT DESCTRUNCTRING
 */
let ayarlar = {
    baslik : "JS Harika",
    genislik : "400px",
    yukseklik : "400px",
}
console.log(ayarlar.genislik);

// nesnelerin özelliklerini (anahtar) değişken olarak tanımlamak istiyorsak doğrudan kısaltma olarak kullanamayız

const {baslik,genislik,yukseklik} = ayarlar;
console.log(baslik,genislik,yukseklik);

// eğer kısaltma yapmak istersek kullanım şekli aşağıdaki gibidir.
const {baslik:b,genislik:g,yukseklik:y} = ayarlar;
console.log(b,g,y);


//default olarak tanımlama
//const {baslik:b="Burası default olarak tanımlandı ",genislik:g,yukseklik:y} = ayarlar;


//eğer süslü parantezler eşittirin solunda ise karşısına gelen bir obje vardır ve bunu parçalayacaktır.



//iç içe destrunctring
let kisi = {
    ad : {
        firstname : "Burak",
        lastname : "Çakır",
    },
    sevdigiRenkler : ["Sarı","Kırmızı"],
    yas : 32,
    evliMi : false,
}
const { ad : { firstname,lastname } } = kisi;
console.log(firstname + " " + lastname);
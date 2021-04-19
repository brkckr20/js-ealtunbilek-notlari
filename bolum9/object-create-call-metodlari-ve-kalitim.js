//Person kurucu fonksiyon
function Person(ad,soyad) {
    this.ad = ad;
    this.soyad = soyad;
}

Person.prototype.selamVer = function () {  
    return `Merhaba ben ${this.ad} ${this.soyad}`;
}

const burak = new Person("Burak","Çakır");
console.log(burak.selamVer());


function Ogrenci(ad,soyad,yas,sinif){
    Person.call(this,ad,soyad); // .ağrılacak olan özellikler başka bir obje içerisinde o objenin call metodu yardımı ile çağrılır. this anahtar kelimesi kullanılarak
    this.yas = yas;
    this.sinif = sinif;
}


//başka sınıfa ait prototyplarının çağrılması
Ogrenci.prototype = Object.create(Person.prototype);
Ogrenci.prototype.constructor = Ogrenci;
//Person classaına ait prototype ın ogrenciye ait prototype olarak da kullanılabilmesi için yukarıdaki gibi tanımlanması gerekir
//her classın ortak kullandığı prototypler olduğu gibi her classın kendine ait prototyplearı da olabilir.




/* Ogrenci.prototype.selamVer = function () {  
    return ` Benim adım ${this.ad} ve ${this.sinif}. sinifa gidiyorum `;
}
 */
const ali = new Ogrenci("İsmail","Altun",32,12);
console.log(ali.selamVer());



function MyArray() {  

}

const myArray = new MyArray();
console.log(myArray);
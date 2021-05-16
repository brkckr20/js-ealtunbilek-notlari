function Ogrenci(ad,yas,evlimi,okul) {
    this.ad = ad; //eşittirin sağındaki değer parametre olarak gelen değer
    this.yas = yas;
    this.evlimi = evlimi;
    this.okul = okul;
    this.bilgileriGoster = function () {
        return `İsim ${this.ad} yaş ${this.yas} medeni hali ${this.evlimi} okul ${this.okul}`;
    }
}

const yunus = new Ogrenci('Yunus',32,true,'paü');
console.log(yunus);
//new anahtar kelimesi kullanıldığında 3 şey gerçekleşir.
// 1 -> yeni bir obje oluşturur.
// 2 -> return yazmak zorunda kalmayız.
// 3 -> this kelimesini o an oluşturulan nesneye bağlar.




/*-------------------------------------------------------------------------*/
const ali = new Ogrenci('Ali',21,false,"Gazi Lisesi");
console.log(ali);



// JS deki tüm objeler onu oluşturan construct fonksiyonuna erişebilir.
console.log(yunus.constructor);
// JS ile beraber gelen built in constructor fonksiyonlar vardır.
const denemeObject = {};
console.log(denemeObject.constructor);
const denemeDizi = [];
console.log(denemeDizi.constructor);
const fonk = function () {}
console.log(fonk.constructor);
// diziler ve fonksiyonlar aslında birer objecttir.
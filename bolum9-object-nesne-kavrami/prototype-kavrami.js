//prototype property
//JS prototype miras modelini alır.
//her constructor fonksiyon/class aynı kurucu fonksiyonla oluşturulan instanceların (örnek/kopya) ortak olarak kullanabilecekleri prototype isimli propertye sahiptir. Prototype property bir nesne döndürür. (sabit değerleri bir yerde toplamak denilebilir.)
//obje içerisinde özellikle belirtmesek de o özelliklere sahip olur.



Ogrenci.prototype.okul = "Pamukkale Üniversitesi";
Ogrenci.prototype.bilgileriGoster = function () {
    return `İsim ${this.ad} yaş ${this.yas} medeni hali ${this.evlimi} okul ${this.okul}`;
}

function Ogrenci(ad,yas,evlimi,okul) {
    this.ad = ad; //eşittirin sağındaki değer parametre olarak gelen değer
    this.yas = yas;
    this.evlimi = evlimi;
}

const yunus = new Ogrenci('Yunus',32,true);
console.log(yunus);
console.log(yunus.bilgileriGoster());

const ali = new Ogrenci('Ali',21,false);
console.log(ali);
console.log(ali.bilgileriGoster());


console.log("----");
console.log(Object.getPrototypeOf(ali));

//-----------------
console.log("-----");
const dizi = [1,2,3,4,5];
const dizi2 = [1,2,3,4,5];
console.log(dizi.constructor.prototype);// biz dizi oluşturulunca otomatik olarak kullanılabilecek metotları listelemek
//JS object oriented bir dildir ama bu onun java,c# gibi olduğu anlamına gelmez
//OOP bir aile ise, class based onun bir parçasıdır diyebiliriz. protype-base gibi


class Person{

    static sayac = 0;

    constructor(ad,soyad){
        this.adi    = ad;
        this.soyadi = soyad;
        Person.sayac++;
        /**
         * statik özelliklere nesneler üzeründen değil sınıflar üzerinden erişilir.
         */
    }

    selamVer(){
        return `Merhaba ben ${this.adi + " " + this.soyadi}`;
    }


    /**
     *  statik değişkenler oluşturulabildiği gibi static fonksiyonlarda oluşturulabilir.
     */
    static test () {
        console.log("Bu çalışan metod static bir metotdur.");
    }
}   

class Ogrenci extends Person{
    constructor(ad,soyad,sinif){
/*         this.ad = ad;
        this.soyad = soyad; */ //bunları üst sınıfta da kullandığımız için kalıtım alınan classın constructorundaki özelliklere erişmek için super() anahtar kelimesi kullanılır.
        super(ad,soyad); //ad ve soyad değerleri aynı işlemler kullanılacağı için git bir üst sınıfta yap demiş olduk. yani super anahtar kelimesi ile bir üst sınıfın contructor metodunu çağırmış olduk.
        this.sinif = sinif;
    }


    sinifiniSoyle() {
        return `Ben ${this.sinif}. sınıf öğrencisiyim.`;
    }
}
/*
    alt sınıflar, kalıtım alınan üst sınıfların metot ve özelliklerini kullanabilirken üst sınıflar
    kalıtım vermiş olduğu alt sınıfların metot ve özelliklerini kullanamaz.

*/


const emre = new Person('Emre','Çetin');
console.log(emre.selamVer());


const burak = new Ogrenci("Burak","Çakır");
console.log(burak.selamVer());

const ayse = new Ogrenci("Ayşe","ÇAKIR",12);
console.log(ayse.sinifiniSoyle());


console.log("----");
console.log("Oluşturulan person nesnesi sayısı  : " + Person.sayac);

// statik metod çağrılması
Person.test();
//statik metod örneği 
Math.random();
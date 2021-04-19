//JS object oriented bir dildir ama bu onun java,c# gibi olduğu anlamına gelmez
//OOP bir aile ise, class based onun bir parçasıdır diyebiliriz. protype-base gibi


class Person{
    constructor(ad,soyad){
        this.adi    = ad;
        this.soyadi = soyad;
    }

    selamVer(){
        return `Merhaba ben ${this.adi + " " + this.soyadi}`;
    }
}   

class Ogrenci extends Person{
    constructor(ad,soyad,yas){
/*         this.ad = ad;
        this.soyad = soyad; */ //bunları üst sınıfta da kullandığımız için kalıtım alınan classın constructorundaki özelliklere erişmek için super() anahtar kelimesi kullanılır.
        super(ad,soyad); //ad ve soyad değerleri aynı işlemler kullanılacağı için git bir üst sınıfta yap demiş olduk. yani super anahtar kelimesi ile bir üst sınıfın contructor metodunu çağırmış olduk.
        this.yas = yas;
    }
}


const emre = new Person('Emre','Çetin');
console.log(emre.selamVer());


const burak = new Ogrenci("Burak","Çakır");
console.log(burak.selamVer());
